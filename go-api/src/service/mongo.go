package service

import (
	config "../conf"
	mgo "gopkg.in/mgo.v2"
)

var connection *Connection
var database *Database

type Connection struct {
	*mgo.Session
	db string
}

type Database struct {
	Interface
}

func connect() (*Connection, error) {
	conf := config.ConfReader
	if connection != nil {
		return connection, nil
	}

	session, err := mgo.Dial(conf.GetString("mongodb.host"))
	if err != nil {
		return nil, err
	}

	session.SetMode(mgo.Strong, true)
	connection = &Connection{Session: session, db: conf.GetString("mongodb.dbname")}
	return connection, nil
}

func Connect() (Interface, error) {
	if database != nil {
		return database, nil
	}
	conn, err := connect()
	if err != nil {
		return nil, err
	}
	database = &Database{Interface: conn}
	return database, nil
}
func (conn *Connection) copySession() *mgo.Session {
	return conn.Copy()
}

func Close() {
	if connection != nil {
		connection.Close()
	}
}

func (conn *Connection) FindOne(collection string, query interface{}, data interface{}) error {
	session := conn.copySession()
	defer session.Close()
	c := session.DB(conn.db).C(collection)
	return c.Find(query).One(data)
}

func (ld *Database) FindOne(collection string, query interface{}, data interface{}) error {
	err := ld.Interface.FindOne(collection, query, data)
	return err
}

type Interface interface {
	FindOne(collection string, query interface{}, data interface{}) error
}
