// Every things about objects. 

const person = {
  name : "Priyanshu",
  age : 22 , 
  address : "Thane",
  PhoneNumber : 12234232342,
  "Salary" : 0,
  student:{
    name : "Tony",
    roll : 1234
  },
  // how to create method in object . 
  greet(){
    console.log("hello");
  }
}

// how to access all the proporties in object . 
console.log(person);
// how to add propties in objec t. 
person.life = "fuck";
// how to update proporties in object . 
person.age = 23 ; 
// how to acess different proporties in object . 
console.log(person.name); // dot notation.
console.log(person["Salary"]);
// how to delete the proporties in object. 
delete person["Salary"];
console.log(person);
// How to call method . 
person.greet();
// for loop for object.
for(let key in person){
  console.log(person[key]);
}
// object destructing . 
const obj = {name : "Priyanshu",age : 22};
const {name,age} = {...obj};
console.log(name,age);

// shalow code and deep copy . 
const obj2 = JSON.parse(JSON.stringify(person)) ; 
obj2.student.name = "Unknown";
console.log(obj2);
console.log( person);

// How do Object.key(),Object.values(),and Object.entries() work ? 
console.log(Object.keys(person)); // give the key aur title of the object. 
console.log(Object.values(person)); // values of the object . 
console.log(Object.entries(person)); // give both value and object. 