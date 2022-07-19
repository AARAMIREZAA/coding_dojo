const Joke = require("../models/jokes.models")


// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke) )
        .catch(error => res.status(400).json(error))
}

// READ ALL
module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes) )
        .catch(error => res.json(error))
}

// READ ONE
module.exports.getOneJoke = (req, res) => {
    Joke.findOne({_id : req.params.joke_id})
        .then(oneJoke => res.json(oneJoke) )
        .catch(error => res.json(error))
}

// UPDATE

// DELETE