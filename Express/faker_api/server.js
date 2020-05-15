const port = 8000;
const express = require("express");
var faker = require("faker");

const app = express();

app.get("/", (req, res) => {
    res.send({ hello: "world" });
});

class User {
    constructor() {
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.adress = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.send({ newUser: new User })
})

app.get("/api/compaines/new", (req, res) => {
    res.send({ newCompany: new Company })
})

app.get("/api/user/company", (req, res) => {
    let mycompany = {
        user: new User,
        company: new Company
    }
    res.send({ myCompany: mycompany })
})

console.log(new User);
console.log(new Company);

app.listen(port, () => {
    console.log(
        `Listening on port ${port} for requests that need to be responded to.`
    );
})