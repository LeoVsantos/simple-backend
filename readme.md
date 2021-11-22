# Project MTRIX Challenge

A Node.js project written using Express.

# Installation

```sh
1. to set up `ormconfig.json` from your postgres database.
2. yarn install
3. yarn typeorm migration:run
4. yarn dev
```

# Login Seed

- after running the command `yarn typeorm migration:run` the tables will
be created and populated.

User Seed:

```sh
Email: mtrix@mtrix.com.br
Password: mtrix
```

# Routes

Create user

`POST` users/create

body:
```sh
{
	"name": "string",
	"email": "string",
	"password": "string"
}
```

Create session/login

`POST` sessions

body:
```sh
{
	"email": "string",
	"password": "string"
}
```

Create Product

`POST` products/create

body:
```sh
{
	"name": "string",
	"description": "string",
	"price": 0,
	"package_type": "string",
	"package_quantity": 0,
	"weight": 0
}
```

List Product

`GET` products/list

List Packages

`GET` /products/packages

---

The application is running on [localhost](http://localhost:3333).
