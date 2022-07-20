const mongoose = require("mongoose")

// DEFINE SCHEMA
const JokesSchema = new mongoose.Schema({
    joke: {
        type: String,
        // CUSTOM VALIDATION MSG
        minLength:[2, "Joke has to be must be 2 characters long"]
    }
}, {timestamps:true})

// REGISTER THE SCHEMA
const Joke = mongoose.model("Joke", JokesSchema)

// EXPORT JOKESAPI SHCEMA
module.exports = Joke