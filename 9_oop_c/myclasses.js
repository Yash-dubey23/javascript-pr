// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return`encrypted ${this.password}`;
    }
    changeusername(){
        return `Username changed to ${this.username.toUpperCase()}`;
    }
}

const user1 = new User('Chai', "chai@example.com", "password123");
console.log(user1.encryptPassword());
console.log(user1.changeusername());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
   return`encrypted ${this.password}`;
}
User.prototype.changeUsername = function(){
   return `Username changed to ${this.username.toUpperCase()
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());