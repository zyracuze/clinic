# Try to test

## POST /fee/create
Create new fee

* Content-Type: application/json

```json
{
    "idPatient": "P000014",
    "firstname": "Phatcharaphan",
    "lastname": "Ananpreechakun",
    "fees": [
        {
            "expenseItem": "ค่าตรวจหมอ",
            "amount": 200
        },
        {
            "expenseItem": "ค่ายาแก้ปวด",
            "amount": 350
        }
    ]
}
```

===

### Expected response

* Status: 201

## POST /fee/search
Search fee with idPatient, firstname, lastname, and period

* Content-Type: application/json

```json
{
   	"idPatient": "",
	"firstname": "",
	"lastname": "",
	"period": 7
}
```

===

### Expected response

* Status: 200

```json
[
    {
        "id": "5979adaeb688c81b5693a62f",
        "idFee": "F000001",
        "idPatient": "P000014",
        "firstname": "Phatcharaphan",
        "lastname": "Ananpreechakun",
        "fees": [
            {
                "expenseItem": "ค่าตรวจหมอ",
                "amount": 200
            },
            {
                "expenseItem": "ค่ายาแก้ปวด",
                "amount": 350
            }
        ],
        "createDateTime": "2017-07-27T16:09:02.934+07:00"
    },
    {
        "id": "5979adafb688c81b5693a63c",
        "idFee": "F000002",
        "idPatient": "P000014",
        "firstname": "Phatcharaphan",
        "lastname": "Ananpreechakun",
        "fees": [
            {
                "expenseItem": "ค่าตรวจหมอ",
                "amount": 200
            },
            {
                "expenseItem": "ค่ายาแก้ปวด",
                "amount": 350
            }
        ],
        "createDateTime": "2017-07-27T16:09:03.914+07:00"
    },
    {
        "id": "5979adb1b688c81b5693a652",
        "idFee": "F000004",
        "idPatient": "P000014",
        "firstname": "Phatcharaphan",
        "lastname": "Ananpreechakun",
        "fees": [
            {
                "expenseItem": "ค่าตรวจหมอ",
                "amount": 200
            },
            {
                "expenseItem": "ค่ายาแก้ปวด",
                "amount": 350
            }
        ],
        "createDateTime": "2017-07-22T15:42:07.854+07:00"
    }
]
```
