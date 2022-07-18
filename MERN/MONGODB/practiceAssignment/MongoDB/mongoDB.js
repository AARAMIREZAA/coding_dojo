//create
// db.ninjas.insert({"name": "edward im", "age": "31"})



//read
// db.ninjas.find()
db.students.find()
db.students.find({"home state": "ca"})
db.students.find({"lucky number": {$gt: 3}})

//update


//delete


// Create a database called 'my_first_db'.

// Create students collection.

db.createCollections("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

db.students.insert({"name": "Adrian Ramirez","home state": "ca","lucky number": 7,"birthday": {"month": 09,"day": 10,"year": 1993}})

// Create 5 students with the appropriate info.

db.students.insert({"name": "Adrian Ramirez","home state": "ca","lucky number": 7,"birthday": {"month": 09,"day": 10,"year": 1993}})
db.students.insert({"name": "Rick Sanchez","home state": "ca","lucky number": 777,"birthday": {"month": 12,"day": 10,"year": 1960}})
db.students.insert({"name": "Morty Smith","home state": "ca","lucky number": 11,"birthday": {"month": 04,"day": 19,"year": 2006}})
db.students.insert({"name": "Alan Rickman","home state": "WA","lucky number": 444,"birthday": {"month": 09,"day": 22,"year": 1973}})
db.students.insert({"name": "Harry Radcliff","home state": "ca","lucky number": 7,"birthday": {"month": 12,"day": 25,"year": 1998}})



// Get all students.

// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

// Get all students whose lucky number is greater than 3

// Get all students whose lucky number is less than or equal to 10

// Get all students whose lucky number is between 1 and 9 (inclusive)

// Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

// Add some unique interests for each particular student into each of their interest arrays.

// Add the interest 'taxes' into someone's interest array.

// Remove the 'taxes' interest you just added.

// Remove all students who are from California.

// Remove a student by name.

// Remove a student whose lucky number is greater than 5 (JUST ONE)

// Add a field to each student collection called 'number_of_belts' and set it to 0.

// Increment this field by 1 for all students in Washington (Seattle Dojo).

// Rename the 'number_of_belts' field to 'belts_earned'

// Remove the 'lucky_number' field.

// Add a 'updated_on' field, and set the value as the current date.