# Magic mock API

## A magic mock API built using faker 🔮 [Github](https://github.com/jonatns/magic-mock-api)


It generates data based on a query. In order to generate data you need to send a stringified JSON as a data query parameter with following format:

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

The query will look like this: /your-cool-pathname?data=stringifiedJSON

* count: number of records you want to generate
* fields: object containing all the fields you want to generate per record

Each field should be in the following format: { "key": "fakerAPIMethod" }

[Please check faker for the full list of API methods](http://marak.github.io/faker.js "Faker")
