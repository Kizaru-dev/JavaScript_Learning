// Think of spread like : open and copy everythings inside . 

// copy an array . 
const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];
console.log(arr2);

// Add Values while Coping . 

console.log(arr2); // [1,2,3,4,5]

// Merge Arrays . 
const a = [1,2];
const b = [3,4];

const merged = [...a,...b];
console.log(merged);

// Copy Object . 
const user = {name : "Priyanshu", age : 22};
const newUser = {...user};
console.log(newUser);

// Update Object Value . 
const updateUser = {...user,age : 25};

// Destructing : Take items out of the box . 
// Spread : Open the box and copy everything.

// Q!.
const data = {name : "Priyanshu" ,age : 22 };
const {name , age} = data ; 
console.log(name);
console.log(age);
//Q2
const arr = [5,10,15];
const [first,second] = arr ; 
console.log(first);
console.log(second);
// Q3 . 
let num1 = [1,2];
let num2 = [3,4];
let result = [...num1,...num2];
console.log(result);
// Update this object using spread . 
const car = {brand : "BMW", year : 2020};

const car2 = {...car,year : 2024};
console.log(car2);


