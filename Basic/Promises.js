// A Promise represents :- Something that will happen in the future . 
// example : - Fetching data from server . 
        //      Reading a file . 
        //      API CALL 

// Basic Promise . 
// in promise when the result is true we use then and when the result is false we use catch.
// A Promise has 3 state . 
// Pending : - The Promise is still waiting . 
// Fulfilled :- The Promise succeded -> resolve()
// Rejected :- The Promise failed -> reject()
// Real-life = pending :- food is being prepared . 
            // Resolved :- food delivered successfully . 
            // Rejected :- order cancel.

const myPromise = new Promise((resolve,reject) =>{
  let success = true ;
  if(success) {
    resolve("Taks Compeleted")
  }else {
    reject("Task Failed");
  }
});

myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((result)=>{
      console.log(error);
    });

const p = new Promise((resolve,reject)=> {
  resolve("Hello");
})
p.then((result)=>{
  console.log(result);
})
