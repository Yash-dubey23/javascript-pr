let a=1000
// const b=20
// var c=30

// {}   // scope
 // 1. Global Scope
if(true){   
    let a=10
const b=20
// var c=30 // so not to used to var as it is function scope and not block scope
// console.log("Inner: ", a);
}  // in that it is block scope

// for(let i=0; i<array.length; i++){
//     const element = array[i]
// }
// console.log("Value of a: ", a);
// console.log("Value of b: ", b);
// console.log("Value of c: ", c);


//  inspect mai global scope alag hai aor node mai alag hai global scope  aor window object alag hai node mai global object alag hai window object nahi hota node mai


// 
function one(){
    const username = "Hitesh"

    function two(){
        const website= "Youtube"
        console.log(username);
    }
    // console.log(website);  // website is not defined as it is in different scope

    two()
}
one()

if(true){
    const username = "Hitesh"
    if(username === "Hitesh"){
        const website = "Youtube"
        console.log(username+website);
    }
    // console.log(website);  // website is not defined as it is in different scope
}
// console.log(username);  // username is not defined as it is in different scope




// +++++++++++++++++++ interesting++++++++++++++++++++++++

console.log(addone(5))   // 6
function addone(num){
    return num+1
}

 
// you not able to acces first before hosting in case of function expression
console.log(aaTwo(5))   // i t give error as it is not hoisted like function declaration
const aaTwo= function(num){
    return num+2
}
