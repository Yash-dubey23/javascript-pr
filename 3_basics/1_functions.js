
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName();

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username="Yash"){    // just like default values
    // if(username === undefined){
    if(!username){
        // console.log("Please enter a username");
        return;
    }
    return `Welcome back ${username}`
}

// console.log(loginUserMessage("Hitesh"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){    // rest operator
    return num1
}
console.log(calculateCartPrice(100,200,300))   // [300]


const User = {
    name: "Hitesh",
    price: 1000
}
function handleObject(anyObject){
    console.log(` Username is ${anyObject.name} and price is ${anyObject.price}`);
}
// handleObject(User)
handleObject({
    name: "Yash",
    price: 500
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(200,5000,1000,3000))   // undefined;