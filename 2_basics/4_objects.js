const tinderUser = new Object();    // singleton
tinderUser.id = "123abc";
tinderUser.name = "Yash";
tinderUser.isLoggedIn = false;
tinderUser.lastLoginDays = ["Monday", "Tuesday", "Wednesday"];
// console.log(tinderUser);

const reularUser = {
    email: "yash@example.com",
    fullname:{
        username: {
        firstname: "Yash",
        lastname: "Dubey"
    }
}
}
// console.log(reularUser);
// console.log(reularUser.fullname?.username.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3={obj1, obj2}; // this is the wrong method to copy the values of all enumerable own properties from one or more source objects to a target object because it will return the target object with the source objects as properties of the target object
// const obj3 = Object.assign({}, obj1, obj2, obj4 ); // this method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // this method is used to return an array of a given object's own enumerable property names, iterated in the same order that a normal loop would. It returns an array of strings that represent all the enumerable properties of the object.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // this method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well). It returns an array of arrays, where each inner array contains two elements: the first element is the property key and the second element is the corresponding property value.

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // this method is used to return a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it). It returns true if the object has the specified property as its own property, and false otherwise.


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course);