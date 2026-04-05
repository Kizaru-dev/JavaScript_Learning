// Async
// line by line .
// setInterval(()=>{
//     console.log("i am async function");
// },5000);

// Promise two parts accept reject pending
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(5 > 12){
//             resolve("Response OK");
//         }else{
//             reject("Reject 404");
//         }
//     },5000)
// })
//
// async function name (){
//     try{
//         let a = await promise ;
//         console.log(a);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// Fetch = to bring data from somewhere .
let img = document.querySelector("img");

fetch("https://dog.ceo/api/breeds/image/random")
.then((Response)=>{
        return Response.json();
})
    .then((response)=>{
        console.log(response.message);
        img.setAttribute("src", response.message);
    })
.catch((err)=>{
    console.log(err);
})