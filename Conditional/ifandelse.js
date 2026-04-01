// if(){};
let greeting ; 
let hour = 20 ; 

if(hour > 18){
  greeting = "Good day";
}
console.log(greeting);

let age = 19 ; 
let text = "You can not drive";

if(age >= 18){
  text = "You can drive";
}
console.log(text);

// Nested If . 
let country = "USA";
// Nexted if statement can make your code more complex.
if(country == "USA"){
  if(age >= 16){
    text = "You can drive";
  }
}
// A better solution is to use the logical AND operator.

if(country == "USA" && age >= 16){
  text = "You can drive !";
}

// The else statement . 
// Use the else statement to specify a block of code to be executed if a condition is false . 
let condition = false ; 

if(condition){
  // block of code to be executed if the condition is true . 
} else {
  // block of code to be executed if the condition is false.
}

// Example . 
if(hour < 18){
  greeting = "Good day";
} else {
  greeting = "Good evening"
}
console.log(greeting);

// The else if Statment . 
if(condition){
  // block of code to be executed if conditional is true . 
} else if (conditional2){
  // block of code to be executed if the conditional is false and condition2 is true . 
}else {
  // block of code to be executed if the conditional is false and conditional is false . 
}

if(time < 10){
  greeting = "Good morning";
}else if (time < 20){
  greeting = "Good day";
}else {
  greeting = "Good evening"
}
console.log(greeting);