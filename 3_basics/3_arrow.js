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

// const addTwo = (num1, num2) => {
//     return num1 + num2          // explixit return
// }

// const addTwo = (num1, num2) =>  num1 + num2   // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
