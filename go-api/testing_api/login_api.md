# Try to test

## POST /user/create
Create new user

* Content-Type: application/json

```json
{
    "userName":"kae",
    "password": "1234"
}
```

===

### Expected response

* Status: 201

## POST /login
Login with user and password

* Content-Type: application/json

```json
{
    "userName":"kae",
    "password": "1234"
}
```

===

### Expected response

* Status: 200

```json
{
    "userName":"kae",
    "password": "1234"
}
```
