// First install this :-npm install @js-temporal/polyfill
// const { Temporal } = require("@js-temporal/polyfill");

// console.log(Temporal.Now.instant().toString());
// console.log(Temporal.Now.plainDateISO().toString());
// console.log(Temporal.Now.plainTimeISO().toString());
// console.log(Temporal.Now.plainDateTimeISO().toString());
// console.log(Temporal.Now.zonedDateTimeISO().toString());


let date = new Date();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(typeof date);

// let myDate = new Date('2020-01-01');
// let myDate = new Date('01-25-2020');
// let myDate = new Date(2020, 0, 1);   // month is 0 indexed
let myDate = new Date(2020, 0, 1,5,30,0);   // month is 0 indexed
console.log(myDate.toString());
console.log(myDate.getFullYear());

let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));
let myDateOne = new Date(mytimestamp);
console.log(myDateOne.toString());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})