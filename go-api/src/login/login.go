package login

import (
	"net/http"

	database "../service"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

type User struct {
	Username string `json:"userName"`
	Password string `json:"password"`
}

func ValidateUserLogin(c echo.Context) error {
	user := new(User)
	err := c.Bind(user)

	if err != nil {
		return c.JSON(http.StatusBadRequest, nil)
	}

	result := &User{}
	result, err = getDataLogin(result.Username)
	if err != nil {
		return c.JSON(http.StatusOK, "Username and Password are not found.")
	}

	if user.Username == result.Username && user.Password == result.Password {
		display := "login success" + result.Username
		return c.JSON(http.StatusOK, display)
	}

	return c.JSON(http.StatusUnauthorized, "Username and Password are not found.")
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
