// INJECT DEPENDENCIES
const { faker } = require("@faker-js/faker")

// CREATE CLASS FOR COMPANY
class Company {
    // CONSTRUCTOR
    constructor() {
        this._id = faker.datatype.number()
        this.name = faker.company.companyName()
        this.address = {
            street: faker.address.streetName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

// EXPORT COMPANY CLASS
module.exports = Company