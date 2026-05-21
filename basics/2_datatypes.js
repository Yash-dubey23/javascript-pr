"use strict"  //treat all the js code as newer version
// Data types in JavaScript
// 1. Primitive data types: string, number, boolean, null, undefined, symbol
// 2. Non-primitive data types: object, array, function

// alert(3+3)             // we are using nodejs not browser, so alert will not work

// tc39 ot npm/nbm
// 1. String: a sequence of characters enclosed in single quotes, double quotes, or backticks
let name="yash"
let city='mumbai'
let message=`welcome ${name} to ${city}`
console.log(message)

// 2. Number: a numeric value, can be an integer or a floating-point number   // range be 2 to the power of 53
// for above use BigInt
let age=25
let price=99.99
console.log(age,price)

// 3. Boolean: a logical value that can be either true or false
let isStudent=true
let isEmployed=false
console.log(isStudent,isEmployed)

// 4. Null: a special value that represents the absence of any object value  // standalone value, not an object // look ltkiwe is empty value
let emptyValue=null
console.log(emptyValue)

// 5. Undefined: a special value that represents the absence of a value or an uninitialized variable
// symbol: a unique and immutable primitive value that can be used as a key for object properties
// object: a collection of key-value pairs, where the keys are strings and the values can be of any data type

console.log(typeof "Yash")  // string
console.log(typeof null)  //  object (this is a known bug in JavaScript, null is not actually an object, but typeof null returns "object")
console.log(typeof undefined)  // undefined