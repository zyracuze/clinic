package main

import (
	fee "fee"
	login "login"
	patient "patient"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.POST, echo.PUT, echo.GET},
	}))

	e.POST("/login", login.ValidateUserLogin)
	e.POST("/user/create", login.CreateUser)
	e.POST("/patient/create", patient.CreatePatient)
	e.POST("/patient/update", patient.UpdatePatient)
	e.POST("/patient/search", patient.SearchPatient)
	e.POST("/fee/create", fee.CreateFee)
	e.POST("/fee/search", fee.SearchFee)
	e.GET("/patient/search/:id", patient.SearchPatientById)
	e.Logger.Fatal(e.Start(":8888"))
}
