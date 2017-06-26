package patient

import (
	"net/http"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
	database "service"
)

func SearchPatient(c echo.Context) error {
	patient := new(Patient)
	if err := c.Bind(patient); err != nil {
		return c.NoContent(http.StatusBadRequest)
	}

	result, err := patient.Find()
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}

	return c.JSON(http.StatusOK, result)
}

func (p *Patient) Find() (*[]Patient, error) {
	db, err := database.Connect()
	if err != nil {
		return nil, err
	}
	query := bson.M{
		"idpatient": bson.M{
			"$regex": p.IdPatient,
		},
		"firstname": bson.M{
			"$regex": p.FirstName,
		},
		"lastname": bson.M{
			"$regex": p.Lastname,
		},
	}
	var result []Patient
	err = db.Find("patient", query, &result)
	if err != nil {
		return nil, err
	}
	return &result, nil
}
