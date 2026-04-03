// Arrays. 
// let age = [];
// let age2 = 25 ; 

// console.log(age.length);

// How to add element in array . 

// age.push(32,23,223,22);
// console.log(age.toString());
// console.log(age.toString())
// // using index . 
// // how to remove element from array . 
// age.pop(); // remove the element from end . 
// age.shift(); // remove the element form front-end.
// // remove element between element . 
// age.splice(0,1); // remove the element from the middle. 
// console.log(age.toString()); // convert the element from array to string .

// let nums = [1,3,4,45,3,2,3,22];
// // for loop
// for(i = 0 ; i < nums.length ; i++){
//   console.log(nums[i]);
// }
// // for of loop
// // for(let val of nums){
// //   console.log(val);
// // }
// // for each loop 
// nums.forEach((element =>{
//   console.log(element);
// }));
 
// function array(val){
//   console.log(val);
// }
// nums.forEach(array);

let nums = [25,23,24,22,31,1,12,22];
let num2 = [41,42,43,44,45]


// Map (help to make the all the element differnet or change the element . )
let a = nums.map((value) => {
  return value*2 ; 
});
console.log(nums.toString());
console.log(a.toString());

// Filter .  (help to find element which given condition)
let b = nums.filter((value)=>{
  return  value > 30;
})
console.log(b.toString());

// Different between splice and slice . 
// splice remove the element from the original array . 
// nums.splice(0,2);
// let d =  nums.slice(0,2); :- give a new array with number of element you want . 
// console.log(d.toString());
// console.log(Array.isArray(nums));


// Destructing . 
let a1 = [...nums,...num2];
console.log(a1.toString());
let b2 = nums.concat(num2);
console.log(b2.toString());
a1.sort();
console.log(a1.toString());
let c1 = a1.sort((a,b)=>{
  return b-a;
});
console.log(c1.toString());