class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}
const teacher1 = new Teacher("Chai", "chai@example.com", "password123");
teacher1.logMe();
teacher1.addCourse();
const masalachai = new Teacher("Masala Chai")
masalachai.logMe();