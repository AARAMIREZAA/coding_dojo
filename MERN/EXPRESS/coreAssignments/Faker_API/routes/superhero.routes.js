const /superherocontroller = require("./controllers/superhero.controllers")

module.export = (app) => [
    app.get("api/hello", superheroController.hello)
    app.get("api/users", superheroController.getAUser)
    app.post("api/users", superherocontroller.createUser)
]



// need controllers define in order for this to work


// the below are just notes
// routes and controllers

//read one
app.post("./api/superheroes", superheroCOntroller.createsuperhero)


//this goes in another file
module.exports.createsuperhero = (req,res) => {

    console.log("FORM DATA", req,body)
    res.json({
        id:
        name, req,
    })
}


//read all
app.get("./api/superheroes", superherocontroller)

module.exports.
//update
module.exports.updatehero = (req,res) => {
    const 
}

//delete