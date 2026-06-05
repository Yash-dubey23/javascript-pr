function SetUsername(username) {
// complex Db calls
    this.username = username;
    console.log("called");
}
function createUser(Username,email,password ) {
    SetUsername.call(this, Username);
    this.Username = Username;
    this.email = email;
    this.password = password;
}

const user1 = new createUser('Chai', "chai@fb.com", "123")
console.log(user1);