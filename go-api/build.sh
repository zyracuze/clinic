# rm -rf pkg
# rm -rf bin

export GOPATH=`pwd`

gofmt -w src

go get github.com/spf13/viper
go get gopkg.in/mgo.v2
go get gopkg.in/yaml.v2

go install main

./bin/main
