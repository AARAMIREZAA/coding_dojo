// IMPORT DEPENDECIES
const express = require("express");

// INSTANTIATE AN EXPRESS SERVER
const app = express();
const port = 8000;

// START MONGOOSE CONFIG
require("./config/mongoose.config");


// SETUP MIDDLEWARE
    // ALLOWING USE OF JSON
app.use(express.json())
    // ALLOWING USE OF POST REQUEST INFO
app.use(express.urlencoded({extended: true}))

// DEFINE API ENDPOINTS
const jokesRoutes = require("./routes/jokes.routes")
jokesRoutes(app)

// RUN EXPRESS SERVER
app.listen(port, () => console.log("Listening on port 8000"));