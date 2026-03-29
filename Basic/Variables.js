
// In JavaScript , Variables are used to store data .
// There are mainly 2 modern ways to declare variable .

// 1. let = value can be changed later .
// 2. const = Value cannot be reassigned .

let a = 10 ;
console.log(a);

const b = 10 ;
console.log(b);

const user = {name: "Rahul"}; // With const , objects and arrays can still change inside .
user.name = "Priyanshu";
console.log(user.name);

// Question1 : Create a variabel to store your age and update it after 5 years .
let age = 21 ;
age = age + 5 ;
console.log(age);

// Question2 :  Create a constant for your country name and try changing ti . What happens ?
const name = "UltraControlPvT . ";

// Question 3 : Create a constant for your country name and try changing it , what happens ?
const country = "India";
console.log(country);

const person = {name:"Youtube",age:20};
person.age = 25 ;
console.log(person.age)