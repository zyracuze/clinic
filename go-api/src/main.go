package main

import (
	login "./login"
	patient "./patient"
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

	e.POST("/login", login.ValidateUserLogin)
	e.POST("/patient/create", patient.CreatePatient)
	e.Logger.Fatal(e.Start(":8888"))
}
