# Magic mock API

## A magic mock API built using faker 🧙‍

It generates data based on a query. In order to generate data you need to send a JSON with following format:

```json
{
  "count": 2,
  "fields": {
    "id": "random.uuid",
    "firstName": "name.firstName",
    "lastName": "name.lastName",
    "email": "internet.email",
    "phone": "phone.phoneNumberFormat"
  }
}
```

* count: number of records you want to generate
* fields: object containing all the fields you want to generate per record

Each field should be in the following format: { "key": "fakerDataType" }

[Please check faker for the full list of data types](http://marak.github.io/faker.js "Faker")
