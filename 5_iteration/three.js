// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}
  

// for of works on iterables like arrays, strings, maps, sets, etc. It does not work on plain objects. For plain objects, we can use for in loop or Object.keys(), Object.values(), Object.entries() to iterate over the properties.
const greeting = "Hello World"
for (const char of greeting) {
    console.log( ` Each character: ${char}`);
}

// Maps :- it or unique key value pair

const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
console.log(map);
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}


const myObject = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};
  

// forin
for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}