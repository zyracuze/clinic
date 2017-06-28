#!/bin/bash
export GOPATH=`pwd`

# gofmt -w src

if [ "$1" = "refresh" ]
then
  rm -rf pkg
  rm -rf bin
  rm -rf $GOPATH/src/gopkg.in/
  rm -rf $GOPATH/src/golang.org/
  rm -rf $GOPATH/src/github.com/

  echo "Downloading dependencies ...."
  go get -u github.com/labstack/echo/...
  go get -u github.com/spf13/viper

  # go get gopkg.in/mgo.v2
  # go get gopkg.in/yaml.v2
  git clone -b v2 git@github.com:go-mgo/mgo.git $GOPATH/src/gopkg.in/mgo.v2
  git clone -b v2 git@github.com:go-yaml/yaml.git $GOPATH/src/gopkg.in/yaml.v2

fi

echo "Testing ...."
go test -v patient/...

echo "Building ...."
go install main

echo "Finished"
./bin/main
