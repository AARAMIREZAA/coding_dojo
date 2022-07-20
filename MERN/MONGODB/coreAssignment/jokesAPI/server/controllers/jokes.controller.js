// IMPORT MODEL
const { response } = require("express")
const Joke = require("../models/jokes.model")

module.exports.test = (req, res) => {
    res.json("IT WORKS, ADRIAN!!!!")
}

// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(error => res.status(400).json(error))
}

// READ ALL
module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(error => res.json(error))
}

// READ ONE
module.exports.getOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json(oneJoke))
        .catch(error => res.json(error))
}

// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.joke_id }, req.body, { new: true, runValidators: true })
        .then(updateOneJoke => res.json(updateOneJoke))
        .catch(error => res.status(400).json(error))
}

// DELETE
module.exports.destroyJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.joke_id })
        .then(confirm => res.json(confirm))
        .catch(error => res.json(error))
}
