// IMPORT CONTROLLER
const userController = require("../controllers/user.controllers")

module.exports = (app) => {
    app.post("/api/jokes", jokeController.createJoke)
    app.get("/api/jokes", jokeController.getAllJokes)
    app.get("/api/jokes/:joke_id", jokeController.getOneJoke)
}