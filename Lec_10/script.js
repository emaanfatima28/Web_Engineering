//Call Back Function
// console.log("I am initial");
// setTimeout(function(){
//     console.log("I am inside");
// },2000)
// console.log("I am ending");

//console.log("Before");
// function fetchUser(){
//     setTimeout(function(){
//       //  console.log("I am inside");
//         return{
//             name : 'Emaan',
//             age : '20'
//         }
//     },2000);
// }
// const returnedUser = fetchUser();
// console.log(returnedUser);

// function fetchUser(userId, callback) {
//     setTimeout(function() {
//         const fetchedUser = {
//             id: userId,
//             name: 'Emaan',
//             email: 'emaan@email.com',
//             age: 20
//         };
//         callback(fetchedUser);
//     }, 2000);
// }

// fetchUser(123, function(user) {
//     console.log(user);
// });

// function sendEmail(userEmail, callback) {
//     setTimeout(function() {
//         const response = {
//             status: true
//         };
//         callback(response);
//     }, 3000);
// }

// function callback(response) {
//     console.log(response);
// }

// sendEmail('emaan@email.com', callback); 

// const promise = new Promise(function(resolve,reject){
//     setTimeout(reject(new Error("I am filed"))
//         //resolve(1)
//         ,2000);
// });

// console.log(promise.then());
// promise.then(function(result){
//     console.log(result);
// }).catch(function(result){
//     console.log(result);
// })
// console.log("End");

//Open Table for APIs
// const getAPI = fetch('https://api.github.com/users/emaanfatima28');
// //console.log(getAPI);
// getAPI.then((res)=>console.log(res))
// .catch((err)=>console.log(err.message));


// function getUser(id, callback) {
//     setTimeout(function(){
// const fetchUser = {
//      id : id,
//      name : 'Emaan',
//       email: "emaan@email.com"
// }
// callback(fetchUser);
//     },2000);
    
// }

// getUser(101, function(user) {
//     console.log(user);
// });

async function fetchData() {
    console.log("Start");

    let result = await new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 2000);
    });

    console.log(result);
    console.log("End");
}

fetchData();
console.log("After fetchData()");
