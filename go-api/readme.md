<!-- start api -->
# วิธีการ run GO API

<!-- step mongo and first use api-->
## 1. run golang
```
$cd go-api
$sh build.sh
```
## 2. start mongodb
```
$mongod --dbpath <path of data>
```
## 3. step login
  - ถ้าไม่มี user
    - สร้าง user โดยยิงผ่าน Postman ใส่ URL http://localhost:8888/user/create
    - header
    ```
       Content-Type = application/json
    ```
    - body
    ```
      {
        "userName":"kae",
        "password": "1234"
      }
    ```
    - ระบบจะสร้างฐานข้อมูล user ให้อัตโนมัติ
  - มี user
    - login ด้วย URL http://localhost:8888/user/login
