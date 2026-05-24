// singleton object :-it is made by using constructor function and it is used to create only one object
// object.create() method is used to create an object with the specified prototype object and properties. It is a static method of the Object constructor.

const mySym=Symbol("key1"); // this is a symbol which is a unique and immutable data type that can be used as a key for object properties
// Object literal
const JsUser={
    name:"Yash",
    "full name":"Yash Dubey",
    age:22,
    [mySym]:"mykey1",
    location:"India",
    email:"yash@example.com",
    isLoggedIn:true,
    lastLogin: ["Monday", "Tuesday", "Wednesday"],

}

// console.log(JsUser.email);     // this is wrong method to access the property of an object because it is not a variable but it is a property of an object so we have to use dot notation or bracket notation to access the property of an object
// console.log(JsUser["full name"]); // this is the correct method to access the property of an object because it is not a variable but it is a property of an object so we have to use dot notation or bracket notation to access the property of an object
// console.log(JsUser[mySym]); // this is the correct method to access the property of an object because it is not a variable but it is a property of an object so we have to use dot notation or bracket notation to access the property of an object
// console.log(typeof JsUser[mySym]);

JsUser.email="yashok.com"; // this is the correct method to update the property of an object because it is not a variable but it is a property of an object so we have to use dot notation or bracket notation to update the property of an object
console.log(JsUser.email);
// Object.freeze(JsUser); // this method is used to freeze an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object becomes effectively immutable. The method returns the passed object.
JsUser.email="harshok.com"; // this is the correct method to update the property of an object because it is not a variable but it is a property of an object so we have to use dot notation or bracket notation to update the property of an object
console.log(JsUser);



JsUser.greet= function(){ // this is a method which is a function that is a property of an object
    console.log(`Hello, I am ${this.name}`); // this is used to refer to the current object
}
// JsUser.greet(); // this is the correct method to call a method of an object because it is not a variable but it is a property of an object so we have to use dot notation or bracket notation to call a method of an object

console.log(JsUser.greet()); // this is the correct method to access the property of an object because it is not a variable but it is a property of an object so we have to use dot notation or bracket notation to access the property of an object