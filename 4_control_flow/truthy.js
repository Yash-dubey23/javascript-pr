const userEmail = "yash.ai"

// truthy values: true, {}, [], 1, "0", "false" just like any string
if (userEmail) {
    console.log("You have an email")
} else {
    console.log("Please provide an email")
}

//  falsy values
// false, 0, "", null, undefined, NaN, 0n (BigInt zero),-0 (negative zero)

// Thurthy value
// "0", 'false', " ", [], {}, function(){}

// empty array is truthy
if (userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyobject = {}
if (Object.keys(emptyobject).length === 0) {
    console.log("Object is empty");
}


//  Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")