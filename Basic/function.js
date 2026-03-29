
// Function And Arrow Function s.

// Concept :- Functions are reusable blocks of code .

// Normal Function:-
function greet(nums){
  return "Hello" + nums ;
}
// Arrow Function.
const great = (name) => {
  return "Hello" + name ;
}
// Short Version.
const greets = name => "Hello" + name ;

// Question1 :- Create a function that adds two numbers. 
function addTwo(num1 , num2){
  return num1 + num2 ;
}
console.log(addTwo(12,12));

// Question 2 : Convert it into an arrow function . 
const addNumber = (num1,num2) => num1 + num2 ;
console.log(addNumber(123,123));

// Question 3 : Create a function that 
// 1. Takes a name .
// 2. Returns "Welcome,<name>";

function createName(name){
  return "Welcome "  + name ; 
}
console.log(createName("Priyanshu"));
