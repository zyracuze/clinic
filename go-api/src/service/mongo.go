package service

import (
	"os"

	mgo "gopkg.in/mgo.v2"
)

type Connection struct {
	MogoSession  *mgo.Session
	DatabaseName string
}

func Connect() (*Connection, error) {
	if(os.Getenv("mongodb_host") == ""  || os.Getenv("mongodb_dbname") == ""){
		panic("Please check the mongodb_host or mongodb_dbname. Can not enter a blank value.")
	}
	session, err := mgo.Dial(os.Getenv("mongodb_host"))
	if err != nil {
		return nil, err
	}
	session.SetMode(mgo.Monotonic, true)
	db := os.Getenv("mongodb_dbname")
	return &Connection{
		MogoSession:  session,
		DatabaseName: db,
	}, nil
}

func createCollection(conn *Connection, collection string) *mgo.Collection {
	session := conn.MogoSession.Clone()
	defer session.Clone()
	return session.DB(conn.DatabaseName).C(collection)
}

func (conn *Connection) FindOne(collection string, query interface{}, data interface{}) error {
	return createCollection(conn, collection).Find(query).One(data)
}

func (conn *Connection) Insert(collection string, data interface{}) error {
	return createCollection(conn, collection).Insert(&data)
}

func (conn *Connection) Update(collection string, query interface{}, data interface{}) error {
	err := createCollection(conn, collection).Update(query, data)
	return err
}

func (conn *Connection) CountCollection(collection string) (int, error) {
	return createCollection(conn, collection).Count()
}

func (conn *Connection) Find(collection string, query interface{}, data interface{}) error {
	return createCollection(conn, collection).Find(query).All(data)
}