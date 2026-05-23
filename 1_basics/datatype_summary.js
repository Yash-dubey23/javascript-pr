//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id );
console.log(anotherId );

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack and heap memory

// primitive data types are stored in stack memory and reference data types are stored in heap memory

// when we assign a primitive data type to a variable, it creates a copy of the value and stores it in the stack memory. when we assign a reference data type to a variable, it creates a reference to the value and stores it in the heap memory. when we access the variable, it looks for the value in the stack memory and if it is not found, it looks for the reference in the heap memory.

// when we assign a primitive data type to another variable, it creates a copy of the value and stores it in the stack memory. when we assign a reference data type to another variable, it creates a reference to the value and stores it in the heap memory. when we access the variable, it looks for the value in the stack memory and if it is not found, it looks for the reference in the heap memory.

// when we modify a primitive data type, it creates a new value and stores it in the stack memory. when we modify a reference data type, it modifies the value in the heap memory. when we access the variable, it looks for the value in the stack memory and if it is not found, it looks for the reference in the heap memory.

// when we pass a primitive data type to a function, it creates a copy of the value and stores it in the stack memory. when we pass a reference data type to a function, it creates a reference to the value and stores it in the heap memory. when we access the variable, it looks for the value in the stack memory and if it is not found, it looks for the reference in the heap memory.
    
// when we return a primitive data type from a function, it creates a copy of the value and stores it in the stack memory. when we return a reference data type from a function, it creates a reference to the value and stores it in the heap memory. when we access the variable, it looks for the value in the stack memory and if it is not found, it looks for the reference in the heap memory.

let myYouTubeChannel = "Yashu Tech";
// let anotherChannel = myYouTubeChannel;
let anotherChannel = "Code with Yashu";

console.log(myYouTubeChannel);
console.log(anotherChannel);

let userOne = {
    name: "Yashu",
    channel: "Yashu Tech",
}

let userTwo = userOne;

userTwo.name = "Code with Yashu";

console.log(userOne);
console.log(userTwo);