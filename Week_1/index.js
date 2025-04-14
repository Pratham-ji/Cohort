// for sync vs async task (uses callback under the hood)
//create a textfile (a.txt)
// run this on replit and work around for observing the sync natue

const fs = require('fs');
//filesystem module
fs.readFile("a.txt", "utf8", function (err, data){
  console.log(data);
})

console.log("Hi! There");


// checkout latentflip.com/loupe and see through the backend that is amazing and run this and experiment


console.log("hi there");

setTimeout(function(){
    console.log("from inside async fn")
}, 20000);

setTimeout(function(){
    console.log("from inside async fn")
}, 10000);

let a= 0;

for(let i = 0; i<10; i++){
    a = a + 1;
}
console.log(a);


// from this you will know how tasks are done and concepts of multi threading how js handle and parallelise tasks and real use of callback function.

// we use promises to create our own asynchronous function

const fs = require('fs');

//my own asynchronous function

function fileread(){
  console.log("inside fileread");
  return new Promise(function(resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function(err, data){
      console.log("before resolve");
      resolve(data);
    });
    })
}

// callback function to call
function onDone(data){
  console.log(data)
}


var a = fileread();
a.then(onDone);

//=> pending, resolved these are some states of promises
//Promise (syntactic sugaer) is just a class that makes callbacks and asynchronous functions slightly more readable.
//Whenever u create it, you need to pass in a function as the first argument which has resolve as the First argument.
// .then gets called whenever the async function resolves
//practice creating an asynchronous fn and calling an asynchronous fn.


//Async await (no callbacks, no .then syntax) makes thread wait to complete the previous task
// need to use async before function to use await.

async function main(){
  const value = await asyncFunction();
  console.log(value);
}





