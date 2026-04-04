// How to select an element .
/*
1. get element by id
2. get element by class
3. query selector .
4. query selector all .
 */
// How to change text .
/*
    1. innermost;
    2. inner text ;
    3. innerContent ;

 */
// How to get attribute / set attribute .
/*
    1. setAttribute , get attribute , a.id = "name of the attribute ".
 */
// How to create new element . -> by using createElement ,
// How to change style .

// Events in JavaScript .
// actions perform by keyboard/mouse are called events , we can customize the code .

let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(event){
    if(event.key === " "){
        h1.textContent = "space";
    }else{
        h1.textContent = event.key;
    }
})

let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");


div2.addEventListener("click", function(event){
    div2.style.backgroundColor = "green";
})

div1.addEventListener("click", function(event){
    div1.style.backgroundColor = "yellow";
})