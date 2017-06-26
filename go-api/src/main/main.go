package main

import (
	fee "fee"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	login "login"
	patient "patient"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.POST, echo.PUT},
	}))

	e.POST("/login", login.ValidateUserLogin)
	e.POST("/patient/create", patient.CreatePatient)
	e.PUT("/patient/update/:id", patient.UpdatePatient)
	e.POST("/patient/search", patient.SearchPatient)
	e.POST("/fee/create", fee.CreateFee)
	e.Logger.Fatal(e.Start(":8888"))
}
