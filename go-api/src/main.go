package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

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
	if c.FormValue("userName") == "phatpan" && c.FormValue("password") == "1234" {
		return c.String(http.StatusOK, "login success")
	}
	return c.String(http.StatusUnauthorized, "not found")
}
