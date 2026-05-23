const name = "Yash";
const repoCount = 50;
console.log(name+ " has " + repoCount + " repositories");   // But it not to use this way because it very old and not good to read and write. So we can use template literals to make it better.

// Template literals
console.log(`${name} has ${repoCount} repositories`);   // This is the best way to use string in javascript. It is very easy to read and write. We can use backticks to create a template literal and use ${} to insert variables in it.

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));