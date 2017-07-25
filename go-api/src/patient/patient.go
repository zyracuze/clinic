package patient

import (
	"time"

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
	RequiredDocument  []string  	`json:"requiredDocument"`
	CongenitalDisease string        `json:"congenitalDisease"`
	BeAllergic        string        `json:"beAllergic"`
	EmergencyContact  Emergency     `json:"emergencyContact"`
	CreateDateTime    time.Time     `json:"createDateTime"`
	UpdateDateTime    time.Time     `json:"updateDatetime"`
}

type Emergency struct {
	Name         string `json:"name"`
	Relationship string `json:"relationship"`
	Tel          string `json:"tel"`
}
