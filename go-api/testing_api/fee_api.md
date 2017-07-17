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
