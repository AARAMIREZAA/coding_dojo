// 1. IMPORT DEPENDENCIES
const express = require("express");
const User = require("./User")
const Company = require("./Company");
const { request, response } = require("express");


// 2. INSTANTIATE AN EXPRESS SERVER
const app = express();
const port = 8000;


// 2.5 MIDDLEWARE/ CONFIGURATIONS
    // ALLOWING USE OF JSON
app.use(express.json())
    // ALLOWING USE OF POST REQUEST INFO
app.use(express.urlencoded({extended: true}))


// 3. DEFINE API ENDPOINTS

    // GET HOME PAGE
app.get("/", (req, res) => {
    response.json({message: "Hello"})
})

    // GET NEW USER
app.get("/api/users/new", (req, res) => {
    response.json(new User())
})

    // GET NEW COMPANY
app.get("/api/companies/new", (req, res) => {
    response.json(new Company())
})

    // GET NEW USER AND COMPANY
app.get("/api/user/company", (req, res) => {
    res.json({"user": new User(), "company": new Company()});
})


// 4. RUN EXPRESS SERVER
app.listen(port, () => console.log("Listening on port 8000"));