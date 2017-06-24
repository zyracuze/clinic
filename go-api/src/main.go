package main

import (
	"net/http"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type User struct {
	Username string `json:"userName"`
	Password string `json:"password"`
}

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.POST},
	}))

	e.POST("/login", ValidateUserLogin)
	e.Logger.Fatal(e.Start(":8888"))
}

func ValidateUserLogin(c echo.Context) error {
	user := new(User)
	err := c.Bind(user)
	if err != nil {
		return c.JSON(http.StatusBadRequest, nil)
	}
	if user.Username == "phatpan" && user.Password == "1234" {
		return c.String(http.StatusOK, "login success")
	}

	return c.String(http.StatusUnauthorized, "Not found.")
}
