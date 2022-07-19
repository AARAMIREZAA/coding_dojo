// IMPORT CONTROLLER
const jokeController = require("../controllers/joke.controllers")

module.exports = (app) => {
    app.post("/api/jokes", jokeController.createJoke)
    app.get("/api/jokes", jokeController.getAllJokes)
    app.get("/api/jokes/:joke_id", jokeController.getOneJoke)
    app.put("/api/jokes/:joke_id", jokeController.updateJoke)
    app.delete("/api/jokes/:joke_id", jokeController.destroyJoke)
}