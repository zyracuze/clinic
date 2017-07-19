package patient

import (
	"net/http"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
	database "service"
)

func SearchPatientById(c echo.Context) error {
	id := c.Param("id")
	result, err := find(id)
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}
	return c.JSON(http.StatusOK, result)
}

func find(id string) (*Patient, error) {
	db, err := database.Connect()
	if err != nil {
		return nil, err
	}
	query := bson.M{"idpatient": id} 
	var result Patient
	err = db.FindOne("patient", query, &result)
	if err != nil {
		return nil, err
	}
	return &result, nil
}
