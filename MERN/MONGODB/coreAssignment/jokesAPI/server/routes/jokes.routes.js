// IMPORT CONTROLLER
const jokesController = require("../controllers/jokes.controller")

// DEFINE ROUTES
module.exports = (app) => {
    app.get("/api/test", jokesController.test)
    app.post("/api/joke", jokesController.createJoke)
    app.get("/api/joke", jokesController.getAllJokes)
    app.get("/api/joke/:id", jokesController.getOneJoke)
    app.put("/api/joke/:joke_id", jokesController.updateJoke)
    app.delete("/api/joke/:joke_id", jokesController.destroyJoke)
}