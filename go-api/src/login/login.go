package login

import (
	"net/http"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
	database "service"
)

type User struct {
	Username string `json:"userName"`
	Password string `json:"password"`
}

func ValidateUserLogin(c echo.Context) error {
	user := new(User)
	err := c.Bind(user)

	if err != nil {
		return c.JSON(http.StatusBadRequest, "Username or password incorrect")
	}

	result, err := getDataLogin(user.Username)
	if err != nil {
		return echo.ErrUnauthorized
	}

	return c.JSON(http.StatusOK, result)
}

func getDataLogin(username string) (*User, error) {
	query := bson.M{
		"username": username,
	}
	db, err := database.Connect()
	if err != nil {
		return nil, err
	}

	var result User
	err = db.FindOne("user", query, &result)
	if err != nil {
		return nil, err
	}
	return &result, nil
}
