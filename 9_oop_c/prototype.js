// // let myname = 'John         '
// // let mychannel = 'chai         '
// // console.log(myname.truelength) // 4



// let myHero=['spiderman','ironman']
// let herpower={
//     spiderman:'web',
//     ironman:'suit',

//     getSpiderPower:function(){
//         console.log(`Spiderman's power is ${this.spiderman}`)
//     } 
// }
// Object.prototype.yash=function(){
//     console.log('yash')
// }
// Array.prototype.heyyash = function(){
//     console.log(`yash says hello`);
// }

// console.log(myHero.truelength) // 2
// console.log(herpower.truelength) // 2

// herpower.yash()
//  myHero.yash()
// myHero.heyyash()
// herPower.heyyash()




// inheritance in js

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()