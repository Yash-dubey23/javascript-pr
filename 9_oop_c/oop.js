const user={
    username:"john",
    loginCount: 8,
    signedIn: true,

    getUserInfo: function(){
        console.log("Got user details from db")
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserInfo());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);