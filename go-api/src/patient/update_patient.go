package patient

import (
	"net/http"

	"time"

	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
	database "service"
)

func UpdatePatient(c echo.Context) error {
	patient := new(Patient)
	id := c.Param("id")
	patient.Id = bson.ObjectIdHex(id)
	if err := c.Bind(patient); err != nil {
		return c.NoContent(http.StatusBadRequest)
	}
	patient.UpdateDateTime = time.Now()
	err := patient.updatePatient(patient)
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}
	return c.NoContent(http.StatusOK)
}

func (p *Patient) updatePatient(patient *Patient) error {
	db, err := database.Connect()
	if err != nil {
		return err
	}

	change := bson.M{"$set": &p}
	find := bson.M{
		"_id": p.Id,
	}

	err = db.Update("patient", find, change)
	if err != nil {
		return err
	}
	return nil
}
