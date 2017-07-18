package patient

import (
	"fmt"
	"math/rand"
	"net/http"
	database "service"
	"time"

	"github.com/labstack/echo"
)

type Counter interface {
	count() (int, error)
}

type MongoCounter struct{}

func (m MongoCounter) count() (int, error) {
	db, err := database.Connect()
	if err != nil {
		return 0, err
	}

	result, err := db.CountCollection("patient")
	if err != nil {
		return 0, err
	}
	return result, nil
}

func CreatePatient(c echo.Context) error {
	patient := new(Patient)
	err := c.Bind(patient)
	if err != nil {
		return c.NoContent(http.StatusBadRequest)
	}

	patient.IdPatient = generateIdPatient(MongoCounter{})
	patient.CreateDateTime = time.Now().Local()
	err = patient.insertPatient()
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}

	return c.NoContent(http.StatusCreated)
}

func generateIdPatient(c Counter) string {
	count, err := c.count()
	if err != nil {
		count = rand.Intn(10)
	}
	result := fmt.Sprintf("P%06d", count+1)
	return result
}

func (p *Patient) insertPatient() error {
	db, err := database.Connect()
	if err != nil {
		return err
	}

	err = db.Insert("patient", p)
	if err != nil {
		return err
	}
	return nil
}
