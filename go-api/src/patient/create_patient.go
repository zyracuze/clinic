package patient

import (
	"net/http"

	database "../service"
	"github.com/labstack/echo"
)

type Patient struct {
	FirstName         string    `json:"firstname"`
	Lastname          string    `json:"lastname"`
	Nickname          string    `json:"nickname"`
	Gender            string    `json:"gender"`
	Birthday          string    `json:"birthday"`
	IdCard            string    `json:"idCard"`
	Career            string    `json:"career"`
	Tel               string    `json:"tel"`
	WorkAddress       string    `json:"workAddress"`
	HomeAddress       string    `json:"homeAddress"`
	RequiredDocument  string    `json:"requiredDocument"`
	CongenitalDisease string    `json:"congenitalDisease"`
	BeAllergic        string    `json:"beAllergic"`
	EmergencyContact  Emergency `json:"emergencyContact"`
}

type Emergency struct {
	Name         string `json:"name"`
	Relationship string `json:"relationship"`
	Tel          string `json:"tel"`
}

func CreatePatient(c echo.Context) error {
	p := new(Patient)

	err := c.Bind(p)
	if err != nil {
		return c.JSON(http.StatusBadRequest, nil)
	}

	err = p.insertPatient()
	if err != nil {
		return c.JSON(http.StatusBadRequest, nil)
	}

	return c.JSON(http.StatusCreated, "Create patient success.")
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
