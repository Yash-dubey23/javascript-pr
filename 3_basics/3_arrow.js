// const user={
//     username:"Hitesh",
//     price:1000,
//     welcomeMessage:function(){
//         console.log(`Welcome back ${this.username}`);
//         console.log(this);
//     }
// }
// // user.welcomeMessage()   // Welcome back Hitesh
// // user.username = "Yash"
// // user.welcomeMessage()   // Welcome back Yash
// console.log(this)

// function chai(){
//     let username="Hitesh"
//     console.log("Chai is the best");
//     console.log(this);
//     console.log(this.username);
// }
// chai()



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// arrow function mai this keyword nahi hota hai to it will look for the nearest this keyword in the parent scope and if it is not found then it will return undefined
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()
