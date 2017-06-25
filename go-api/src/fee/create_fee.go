package fee

import (
	"math/rand"
	"net/http"
	"strconv"
	"time"

	database "../service"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

type Fee struct {
	Id             bson.ObjectId `json:"id,omitempty" bson:"_id,omitempty"`
	IdFee          string        `json:"idFee"`
	IdPatient      string        `json:"idPatient"`
	ExpenseItem    string        `json:"expenseItem"`
	Amount         float64       `json:"amount"`
	CreateDateTime time.Time     `json:"createDateTime"`
}

func CreateFee(c echo.Context) error {
	fee := new(Fee)
	if err := c.Bind(fee); err != nil {
		return c.NoContent(http.StatusBadRequest)
	}

	fee.IdFee = generateIdFee()
	fee.CreateDateTime = time.Now().Local()
	err := fee.create()
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}

	return c.NoContent(http.StatusCreated)
}

func generateIdFee() string {
	t := time.Now().Local()
	dateTime := t.Format("20060102150405")
	count, err := count()
	if err != nil {
		count = rand.Intn(10)
	}
	result := "F" + dateTime + strconv.Itoa(count+1)
	return result
}

func count() (int, error) {
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
