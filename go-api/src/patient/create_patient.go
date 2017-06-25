package patient

import (
	"math/rand"
	"net/http"
	"strconv"

	"time"

	database "../service"
	"github.com/labstack/echo"
	"gopkg.in/mgo.v2/bson"
)

type Patient struct {
	Id                bson.ObjectId `json:"id,omitempty" bson:"_id,omitempty"`
	IdPatient         string        `json:"idPatient"`
	FirstName         string        `json:"firstname"`
	Lastname          string        `json:"lastname"`
	Nickname          string        `json:"nickname"`
	Gender            string        `json:"gender"`
	Birthday          string        `json:"birthday"`
	IdCard            string        `json:"idCard"`
	Career            string        `json:"career"`
	Tel               string        `json:"tel"`
	WorkAddress       string        `json:"workAddress"`
	HomeAddress       string        `json:"homeAddress"`
	RequiredDocument  string        `json:"requiredDocument"`
	CongenitalDisease string        `json:"congenitalDisease"`
	BeAllergic        string        `json:"beAllergic"`
	EmergencyContact  Emergency     `json:"emergencyContact"`
}

type Emergency struct {
	Name         string `json:"name"`
	Relationship string `json:"relationship"`
	Tel          string `json:"tel"`
}

func CreatePatient(c echo.Context) error {
	patient := new(Patient)
	err := c.Bind(patient)
	if err != nil {
		return c.NoContent(http.StatusBadRequest)
	}

	patient.IdPatient = generateIdPatient()
	err = patient.insertPatient()
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}

	return c.NoContent(http.StatusCreated)
}

func generateIdPatient() string {
	t := time.Now().Local()
	dateTime := t.Format("20060102150405")
	count, err := count()
	if err != nil {
		count = rand.Intn(10)
	}
	result := "P" + dateTime + strconv.Itoa(count+1)
	return result
}

func count() (int, error) {
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
