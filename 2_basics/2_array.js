const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // adds the entire dc_heros array as a single element to the end of the marvel_heros array;
// console.log(marvel_heros) // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvel_heros[3][2]) // "batman"  // ehich is bad syntax as chai

// concat



// marvel_heros.concat(dc_heros) // returns a new array that is the result of concatenating the marvel_heros and dc_heros arrays together
// console.log(marvel_heros) // ["thor", "Ironman", "spiderman"]  // original array is not modified

// concat always creates a new array and does not modify the original arrays. It creates a new array that contains all the elements of the original arrays.
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros) // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]

 console.log(all_new_heros);

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Yash"))
console.log(Array.from("Yash"))
console.log(Array.from({name: "Yash"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));