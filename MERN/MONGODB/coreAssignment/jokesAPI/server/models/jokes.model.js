const mongoose = require('mongoose');

// DEFINE SCHEMA
const JokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        // CUSTOM VALIDATION MSG
        minLength:[2, "Joke has to be must be 2 characters long"]
    }
    // name:{
    //     type:String,
    //     required:[true, "NAME IS REQUIRED"]
    // },
    // age:{
    //     type:Number,
    //     min:[0, "Must be older than 0"]
    // },
    // hairColor:{
    //     type:String,
    //     required:[true, 'Must provide hair color']
    // }
}, {timestamps:true})


// REGISTER THE SCHEMA
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;