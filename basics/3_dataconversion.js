let score="33abc"
console.log(typeof score) //string
console.log(typeof (score)) //string

let valuToNumber=Number(score)
console.log(typeof valuToNumber) //number
console.log(valuToNumber) //NaN
let score23=null
console.log(typeof score23) //object
console.log(typeof (score23)) //object

let valuToNumber23=Number(score23)
console.log(typeof valuToNumber23) //number
console.log(valuToNumber23) //0
// if true then convert to number be 1
// if false then convert to number be 0
// "33" becomes 33
// "33abc" becomes NaN

let isLoggedIn=1
console.log(typeof isLoggedIn) //number
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn) //boolean
console.log(booleanIsLoggedIn) //true

// if 1= true , 0=false
// "" = false, "abc"=true

let num=56
let stringNum=String(num)
console.log(typeof stringNum) //string
console.log(stringNum) //56