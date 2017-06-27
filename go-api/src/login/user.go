package login

import (
	"net/http"

	"github.com/labstack/echo"
	database "service"
)

func CreateUser(c echo.Context) error {
	user := new(User)
	if err := c.Bind(user); err != nil {
		return c.NoContent(http.StatusBadRequest)
	}

	err := user.create()
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}

	return c.NoContent(http.StatusCreated)
}

func (user *User) create() error {
	db, err := database.Connect()
	if err != nil {
		return err
	}

	err = db.Insert("user", user)
	if err != nil {
		return err
	}
	return nil
}
