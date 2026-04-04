// simple function . 

// function printName(name){
//   console.log(`Hello ! ${name}`);
// }
// printName("Priyanshu");

// // Function Expression.
// let a = function(){
//   console.log("I am working . ... ")
// };
// // a();

// let b = 13 ;

// function hello(name){
//   console.log(`hey : ${name}`);
// }
// hello("Priyanshu");
// hello("Himanshu");
// hello("Priya");
// hello("Antima");

// // default function 
// function abc(a,b,c,...input){
//   return [a,b,c,input]; 
// }
// ...input is called rest operator . 

// let a1 = abc(2,12,12,12,12,32,1,1,1);
// console.log(a1);

// Arrow function . 
// let a = (name) => {
//   console.log("We are learning JavaScript");
// }
// a();

// What is different between global and local scope.
let a = 4 ; 
function scop(){
  let a = 5 ; 
  console.log(a);
}
console.log(a);
scop();



// This ia a self-called function.
(function(){
  console.log("This is a IIFE function");
})();

// Differnet between pure and impure . 
let a3 = 5 ; 
function impure(){
  let a3 = 8 ; 
}

// pass by value and pass by reference . 
// let a4 = 5 ; 
// function abc(x){
//   x = 6 ; 
//   console.log(x);
// }
// abc(a4);

// console.log(a4);

let name = {name : "Priyanshu"}

function abc(name){
  name.name = "Priyanshu"
  console.log(name);
}
abc(name);
console.log(name);
