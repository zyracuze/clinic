package fee

import (
	"time"

	"gopkg.in/mgo.v2/bson"
)

type Fee struct {
	Id             bson.ObjectId `json:"id,omitempty" bson:"_id,omitempty"`
	IdFee          string        `json:"idFee"`
	IdPatient      string        `json:"idPatient"`
	Firstname      string        `json:"firstname"`
	Lastname       string        `json:"lastname"`
	FeeItem        []FeeItem     `json:"fees"`
	CreateDateTime time.Time     `json:"createDateTime"`
}

type FeeItem struct {
	ExpenseItem string  `json:"expenseItem"`
	Amount      float64 `json:"amount"`
}
