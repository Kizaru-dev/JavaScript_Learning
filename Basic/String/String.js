let text = "293983jfisnhofnso";
console.log(text.length);
// example 2 
let text1 = "We are the so-called \"Vikings\" from the north";
console.log(text1); // this add double-comma in string . 
// example 3 .
let text3 = 'It\'s alright.';
console.log(text3);
// example 4. \\ inserts a backslash in a string .
let text4 = "The character \\ is called backslash";
console.log(text4);

// \b -> Backspace.
// \f -> Form Feed.
// \n -> New Line.
// \r -> Carriage Return 
// \t -> Horizontal Tabulator.
// \v -> Vertical Tabulator.
// The 6 escape characters above were originally designed to control typewriters, teletypes , and fax machines , they do not 
// make any sense inn HTML . 

let text5 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text5);

// String objects and other staff . 
let x = "Priyanshu";
let y = new String("Priyanshu");

console.log(x == y ? true : false);

// When using === operator , x and y are not equal . 
let a = new String("Priyanshu");
let b = new String("Priyanshu");

if(a === b){
  console.log("The references are pointing towards the same object address");
}else{
  console.log("Yeh the address and pointer are difference");
}