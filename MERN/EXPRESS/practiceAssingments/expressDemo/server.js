// 1 import your dependacies
const express = require("express");
const { Server } = require("http");

const faker = require("faker")

//2 instantiate an express server
const app = express();
const port = 8000;

//2.5 setup middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//3 define your api endpoints
app.get("/api/hello", (request, response) =>)

//4 run your express server --- note

app.listen(port,() => console.log('listening on port 8000'{
    response.json({message:"Hello"})
});

app.get("/api/users", (request, response) => {
    response.json([1,2,3,1,4,])
})

app.post("/api/user",(req, res) => {
    res.json({
        name:"Edward Im"
    })
})

//5 start server --- install nodemon first
nodemon Server.js

// install faker api

npm -i faker