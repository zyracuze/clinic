# Try to test

## GET /patient/search/P2017062623181310
Search patient by id

* Content-Type: application/json

===

### Expected response

* Status: 200

```json
{
    "id": "595133c5d967dc5d07162c85",
    "idPatient": "P2017062623181310",
    "firstname": "Phatcharaphan",
    "lastname": "ananpreechakun",
    "nickname": "kae",
    "gender": "w",
    "birthday": "21/02/1988",
    "idCard": "",
    "career": "",
    "tel": "0923123123123",
    "workAddress": "ddd",
    "homeAddress": "dddddddd",
    "requiredDocument": "",
    "congenitalDisease": "",
    "beAllergic": "",
    "emergencyContact": {
        "name": "aaaa",
        "relationship": "father",
        "tel": "09213213"
    },
    "createDateTime": "2017-06-26T23:18:13.635+07:00",
    "updateDatetime": "0001-01-01T00:00:00Z"
}
```

