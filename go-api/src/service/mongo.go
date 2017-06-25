package service

import (
	config "../conf"
	mgo "gopkg.in/mgo.v2"
)

type Connection struct {
	MogoSession  *mgo.Session
	DatabaseName string
}

func Connect() (*Connection, error) {
	conf := config.ConfReader

	session, err := mgo.Dial(conf.GetString("mongodb.host"))
	if err != nil {
		return nil, err
	}
	session.SetMode(mgo.Monotonic, true)
	db := conf.GetString("mongodb.dbname")
	return &Connection{
		MogoSession:  session,
		DatabaseName: db,
	}, nil
}

func (conn *Connection) FindOne(collection string, query interface{}, data interface{}) error {
	session := conn.MogoSession.Clone()
	defer session.Clone()
	c := session.DB(conn.DatabaseName).C(collection)
	return c.Find(query).One(data)
}

func (conn *Connection) Insert(collection string, data interface{}) error {
	session := conn.MogoSession.Clone()
	defer session.Clone()
	c := session.DB(conn.DatabaseName).C(collection)
	return c.Insert(&data)
}

func (conn *Connection) Update(collection string, query interface{}, data interface{}) error {
	session := conn.MogoSession.Clone()
	defer session.Clone()
	c := session.DB(conn.DatabaseName).C(collection)
	err := c.Update(query, data)
	return err
}

func (conn *Connection) CountCollection(collection string) (int, error) {
	session := conn.MogoSession.Clone()
	defer session.Clone()
	c := session.DB(conn.DatabaseName).C(collection)
	return c.Count()
}
