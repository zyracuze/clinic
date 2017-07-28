# Try to test

## GET /patient/search
Search patient by id

* Content-Type: application/json

```json
{
    "idpatient":"P000007",
    "firstname": "RRRR",
    "lastname": "CFFF"
}
```

===

### Expected response

* Status: 200

```json
{
    "_id" : "5977a30e69665c6f96101f0c",
	"idpatient" : "P000007",
	"firstname" : "RRRR",
	"lastname" : "CFFF",
	"nickname" : "dhfg",
	"gender" : "male",
	"birthday" : "26/07/2017",
	"idcard" : "997385747322",
	"career" : "ddEVV",
	"tel" : "0247583929",
	"workaddress" : "THAI",
	"homeaddress" : "ssss",
	"requireddocument" : [
		"certMedicine"
	],
	"congenitaldisease" : "HHH",
	"beallergic" : "SSSS",
	"emergencycontact" : {
		"name" : "DAVAA",
		"relationship" : "DAd",
		"tel" : "0908843622"
	},
	"createdatetime" : "2017-07-25T19:59:10.463Z",
	"updatedatetime" : "0001-01-01T00:00:00Z"
}
```

