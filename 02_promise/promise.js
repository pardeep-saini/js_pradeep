const promiseFirst = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Simple Promise Example");
        resolve();
    },1000)
})
promiseFirst.then(function(){
     console.log("Promise Resolve")
})

// resolve() call the then

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Example 2 without store promise into a variable");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise Resolve without store any variable::")
})

// Pass data through resolve to then.
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Pass data into then throught resolve function::");
           resolve({username: "Pradeep", password: "123"})
    },1000)
})
promiseThree.then(function(user){
    console.log("UserInfo", user)
})

// Pass data then to then Example first then have username and password but i want only pass username.
const promiseFour =  new Promise(function(resolve, reject){
     setTimeout(function(){
          console.log("Promise Four Example:::");
          resolve({username: "Minakhi", password: "Baby"})
     },1000)
})
promiseFour.then(function(user){
    console.log("Get All User Info here", user);
    // we want pass only user name we requre on then function
     return user.username
}).then(function(username){
     console.log("Get Username ",username);
}) 


// handle error

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
    if(error) {
        console.log("Resolve without error:::");
        resolve()
    } else {
         reject("Promise not resolve")
    }
    },1000)
})
 promiseFive.then(function(){
    console.log("Resolve request without any error")
 }).catch(function(erorr){
    console.log("Error:", erorr)
 })

 // Handle Promise with out using then and catch;


 const promiseSix = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error) {
            console.log("Promise six::");
            resolve({username:"Jai", password:"123"});
        } else {
            reject("Error promise six")
        }
        
    },1000)
 })

 async function resolvePromiseWithAsynAwait() {
    try {
        const response = await promiseSix;
    console.log(response, "resolve ")
    } catch(error){
        console.log(error, "Six Exmaple")
    }
 }

 resolvePromiseWithAsynAwait();


 // Call API

//  async function getUser(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         // data not come to proper formate new to pasrt JSON and wait for response
//         response = await response.json();
//         console.log(response);
//     } catch(error) {
//         console.log("Call API for get user")
//     }
//  }
//  getUser()

// call above api through then and catch


fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>{
    console.log("Using Then and catch");
    // data are not showing proper formate new to wait with then
    return response.json();
}).then(response =>{
    console.log(response, "get response now")
})
.catch(error => console.log(error, "error from api "))

// Note
// 404 is not a error , if interview ask , if you got error through API 404 , this is resolve or reject 
// this alwayse resolve , because 404 is not a error, it is response is okay

// 404 means the requested resource is not found, 
// but it’s a valid HTTP response, not a server error. 
// It’s usually treated as a rejection but can be resolved if the application expects it.