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
        "sum": 1650,
        "fees": [
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
                ],
                "sumFeeItem": 550,
                "createDateTime": "2017-07-27 16:09:02"
            },
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
                ],
                "sumFeeItem": 550,
                "createDateTime": "2017-07-27 16:09:03"
            },
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
                ],
                "sumFeeItem": 550,
                "createDateTime": "2017-07-22 15:42:07"
            }
        ]
    }
]
```
