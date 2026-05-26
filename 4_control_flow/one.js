// if

// if(conditionn) {
//     // code to run if condition is true
// } else {
//     // code to run if condition is false
// }

// const isUserLoggedIn = true;
// if (isUserLoggedIn) {
//     console.log("Welcome back!");
// }

// < ,>,<=,>=,===,!==  ,(=== checks for both value and type equality
//  !== checks for both value and type inequality)

// const temperature = 41

// if ( temperature <50 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }


// const score = 200
// if (score > 100) {
//     const power ="fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)


// const balance = 1000
// // if (balance > 500)  console.log("You have a good balance");

// if(balance < 500) {
//     console.log("You have a low balance");
// }else if (balance < 750) {
//     console.log("Your balance is average");
// }       else if (balance < 900) {
//     console.log("Your balance is good");
// } else {
//     console.log("Your balance is excellent");
// }


const userLoggedIn = true
const debitCard = true
const loogegInWithGoogle = false
const loggedInWithFacebook = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("You can make a purchase");
}
if (loogegInWithGoogle || loggedInWithFacebook) {
    console.log("Logged in successfully");
}