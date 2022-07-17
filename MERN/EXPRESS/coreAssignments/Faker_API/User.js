// INJECT DEPENDENCIES
const {faker} = require("@faker-js/faker")


// CREATE CLASS FOR USER
class User {
    // CONSTRUCTOR FUNCTION
    constructor() {
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phoneNumber()
        this.lastName = faker.name.lastName()
        this.firstName = faker.name.firstName()
        this._id = faker.datatype.number()
    }
}

// EXPORT USER CLASS
module.exports = User