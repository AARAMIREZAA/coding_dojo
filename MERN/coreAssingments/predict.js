//1
// prediction
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// // the last car wont be printed out
// console.log(randomCar)
// console.log(otherRandomCar)

//2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// // error cause name is not defined
// console.log(name);
// console.log(otherName);

//3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// // person with hashedpassword will be printed
// console.log(password);
// console.log(hashedPassword);


// //4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output will be, true, idk about the other console logs
// cosole log will display
// console.log(first == second);
// console.log(first == third);


//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
// predict the output will be [1,5,1,8,3,3]
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);





