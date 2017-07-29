package fee

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

func CreateFee(c echo.Context) error {
	fee := new(Fee)
	if err := c.Bind(fee); err != nil {
		return c.NoContent(http.StatusBadRequest)
	}

	fee.IdFee = generateIdFee(MongoCounter{})
	fee.CreateDateTime = time.Now().Local()
	err := fee.create()
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}

	return c.NoContent(http.StatusCreated)
}

func generateIdFee(c Counter) string {
	count, err := c.count()
	if err != nil {
		count = rand.Intn(10)
	}
	result := fmt.Sprintf("F%06d", count+1)
	return result
}

func (m MongoCounter) count() (int, error) {
	db, err := database.Connect()
	if err != nil {
		return 0, err
	}

	result, err := db.CountCollection("fee")
	if err != nil {
		return 0, err
	}
	return result, nil
}

func (fee *Fee) create() error {
	db, err := database.Connect()
	if err != nil {
		return err
	}

	err = db.Insert("fee", fee)
	if err != nil {
		return err
	}
	return nil
}
