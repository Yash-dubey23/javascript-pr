// const promise1=new Promise(function(resolve,reject){
//     // Do an asynchronous operation
//     // DB calls, crytography, network calls
//     setTimeout(function(){
//         console.log("Asynchronous operation completed");
//         resolve("Promise 1 resolved");
//         resolve(); // This will be ignored as the promise is already resolved
//     },2000);
// });
// promise1.then(function(result){
//     console.log(result);
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Asynchronous operation completed");
//         resolve()
//     },2000);
// }).then(function(){
//     console.log("Promise resolved");
// })


// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"john",email:"john@example.com"});
//     },2000);
// });
// promise3.then(function(user){
//     console.log("User data received:",user);
// });



// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true; // Simulating an error condition
//         if(!error){
//             resolve({username:"john",password:"12345"});
//         }else{
//             reject("An error occurred while fetching user data");
//         }
//             },2000);
// });
// const username=promise4.then((user) => {
//     console.log("User data received:", user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; // Simulating an error condition
        if(!error){
              resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromise5() {
//    const response = await promise5;
//     console.log(response);
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.