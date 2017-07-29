package fee

import (
	"net/http"
	database "service"
	"time"

	"gopkg.in/mgo.v2/bson"

	"github.com/labstack/echo"
)

type FeeSearch struct {
	IdPatient string `json:"idPatient"`
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
	Period    int    `json:"period"`
}

type FeeData struct {
	IdPatient      string    `json:"idPatient"`
	Firstname      string    `json:"firstname"`
	Lastname       string    `json:"lastname"`
	FeeItem        []FeeItem `json:"fees"`
	SumFeeItem     float64   `json:"sumFeeItem"`
	CreateDateTime string    `json:"createDateTime"`
}

type FeeResponse struct {
	Sum  float64   `json:"sum"`
	Fees []FeeData `json:"fees"`
}

func SearchFee(c echo.Context) error {
	feeSearch := new(FeeSearch)
	if err := c.Bind(feeSearch); err != nil {
		return c.NoContent(http.StatusBadRequest)
	}

	result, err := feeSearch.find()
	if err != nil {
		return c.NoContent(http.StatusConflict)
	}
	return c.JSON(http.StatusOK, makeDataFee(result))
}

func makeDataFee(f []Fee) interface{} {
	layout := "2006-01-02 15:04:05"
	feeData := []FeeData{}
	var sum float64
	for _, result := range f {
		fee := FeeData{
			IdPatient:      result.IdPatient,
			Firstname:      result.Firstname,
			Lastname:       result.Lastname,
			FeeItem:        result.FeeItem,
			CreateDateTime: result.CreateDateTime.Format(layout),
		}
		var sumFeeItem float64
		for _, item := range result.FeeItem {
			sumFeeItem += item.Amount
		}
		fee.SumFeeItem = sumFeeItem
		sum += sumFeeItem
		feeData = append(feeData, fee)
	}
	return FeeResponse{
		Sum:  sum,
		Fees: feeData,
	}
}

func (f *FeeSearch) find() ([]Fee, error) {
	db, err := database.Connect()
	if err != nil {
		return nil, err
	}
	query := bson.M{
		"idpatient": bson.M{
			"$regex": f.IdPatient,
		},
		"firstname": bson.M{
			"$regex": f.Firstname,
		},
		"lastname": bson.M{
			"$regex": f.Lastname,
		},
		"createdatetime": bson.M{
			"$gt": parseTime(f.Period),
		},
	}
	var result []Fee
	err = db.Find("fee", query, &result)
	if err != nil {
		return nil, err
	}
	return result, nil
}

func parseTime(after int) time.Time {
	if after > 0 {
		after = after * -1
	}
	t := time.Now().AddDate(0, 0, after)
	t = setTime(t, 0, 0, 0, 0)
	return t
}

func setTime(t time.Time, hour, min, sec, nsec int) time.Time {
	return time.Date(t.Year(), t.Month(), t.Day(), hour, min, sec, nsec, t.Location())
}
