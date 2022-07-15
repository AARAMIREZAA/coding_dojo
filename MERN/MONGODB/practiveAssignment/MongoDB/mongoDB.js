//create
// db.ninjas.insert({"name": "edward im", "age": "31"})

db.create.collections("students")
db.students.insert({
    "name": "edward im",
    "home stae": "ca",
    "lucky number": 7,
    "birthday": (
        "month": 10,
        "day": 8,
        "year": 1990
    )
})

//read
// db.ninjas.find()
db.students.find()
db.students.find({"home state": "ca"})
db.students.find({"lucky number": {$gt: 3}})

//update


//delete