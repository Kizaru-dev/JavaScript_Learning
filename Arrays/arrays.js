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

let a = nums.map((value) => {
  return value*2 ; 
});
console.log(nums.toString());
console.log(a.toString());