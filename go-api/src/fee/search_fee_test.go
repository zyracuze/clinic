package fee

import (
	"testing"
	"time"

	"github.com/go-test/deep"
)

func TestParseTimeAfter(t *testing.T) {
	afterDay := 1
	af := time.Now().AddDate(0, 0, afterDay*-1)
	expectTime := setTime(af, 0, 0, 0, 0)

	actual := parseTime(afterDay)

	if actual != expectTime {
		t.Fatalf("Expected %s but got %s", expectTime, actual)
	}

}

func TestResponseSearchFeeWhenHasData(t *testing.T) {
	mockResponseFromMongo := []Fee{
		Fee{
			Id:        "5979adaeb688c81b5693a62f",
			IdFee:     "F000001",
			IdPatient: "P000014",
			Firstname: "Phatcharaphan",
			Lastname:  "Ananpreechakun",
			FeeItem: []FeeItem{
				FeeItem{
					ExpenseItem: "ค่าตรวจหมอ",
					Amount:      200,
				},
				FeeItem{
					ExpenseItem: "ค่ายาแก้ปวด",
					Amount:      350,
				},
			},
			CreateDateTime: time.Date(2017, time.July, 27, 16, 9, 2, 0, time.UTC),
		}, Fee{
			Id:        "5979adafb688c81b5693a63c",
			IdFee:     "F000002",
			IdPatient: "P000014",
			Firstname: "Phatcharaphan",
			Lastname:  "Ananpreechakun",
			FeeItem: []FeeItem{
				FeeItem{
					ExpenseItem: "ค่าตรวจหมอ",
					Amount:      245,
				},
				FeeItem{
					ExpenseItem: "ค่ายาแก้ปวด",
					Amount:      350,
				},
			},
			CreateDateTime: time.Date(2017, time.July, 22, 15, 42, 7, 0, time.UTC),
		},
	}

	actual := makeDataFee(mockResponseFromMongo)
	expected := FeeResponse{
		Sum: 1145,
		Fees: []FeeData{
			FeeData{
				IdPatient: "P000014",
				Firstname: "Phatcharaphan",
				Lastname:  "Ananpreechakun",
				FeeItem: []FeeItem{
					FeeItem{
						ExpenseItem: "ค่าตรวจหมอ",
						Amount:      200,
					},
					FeeItem{
						ExpenseItem: "ค่ายาแก้ปวด",
						Amount:      350,
					},
				},
				SumFeeItem:     550,
				CreateDateTime: "2017-07-27 16:09:02",
			}, FeeData{
				IdPatient: "P000014",
				Firstname: "Phatcharaphan",
				Lastname:  "Ananpreechakun",
				FeeItem: []FeeItem{
					FeeItem{
						ExpenseItem: "ค่าตรวจหมอ",
						Amount:      245,
					},
					FeeItem{
						ExpenseItem: "ค่ายาแก้ปวด",
						Amount:      350,
					},
				},
				SumFeeItem:     595,
				CreateDateTime: "2017-07-22 15:42:07",
			},
		},
	}

	if diff := deep.Equal(actual, expected); diff != nil {
		t.Error(diff)
	}
}

func TestResponseSearchFeeWhenNotHasData(t *testing.T) {
	mockResponseFromMongo := []Fee{}

	actual := makeDataFee(mockResponseFromMongo)
	expected := FeeResponse{
		Sum:  0,
		Fees: []FeeData{},
	}

	if diff := deep.Equal(actual, expected); diff != nil {
		t.Error(diff)
	}
}
