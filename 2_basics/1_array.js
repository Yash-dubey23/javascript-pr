const array=[1,2,3,4,5,"hello",true];
const myHero=["ironman","spiderman","thor"]

const myArray2=new Array(1,2,3,4,5,"hello",true);
console.log(array[0]); // 1


// Array methiods

array.push("6"); // adds an element to the end of the array
console.log(array); // [1, 2, 3, 4, 5, 'hello', true, '6']

array.push("world");
array.push("javascript");
array.pop();

array.unshift(56); // adds an element to the beginning of the array
console.log(array); // [56, 1, 2, 3, 4, 5, 'hello', true, '6', 'world']
array.shift(); // removes the first element of the array
console.log(array); // [1, 2, 3, 4, 5, 'hello', true, '6', 'world']

console.log(array.includes("hello")); // true
console.log(array.indexOf(5)); // 4

const newArr=array.join()
console.log(array); // "1,2,3,4,5,hello,true,6,world"
console.log(newArr); // string
console.log(typeof newArr); // string



// slice,splice,

console.log("A",array)
const myn1=array.slice(1,3); // returns a new array containing the elements from index 0 to 4
console.log(array) // original array is not modified
console.log("B",myn1) // [2, 3]


const myn2=array.splice(1,3); // returns a new array containing the elements from index 0 to 4
console.log(array) // original array is not modified
console.log("C",myn2) // [2, 3, 4]