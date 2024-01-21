"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.jobrole = "";
        this.email = email;
        this.name = name;
    }
}
const user = new User('diwan@gmail.com', 'Diwan Sachidu');
user.city = 'colombo';
// another way
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = '';
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User2 {
    changeCourseCount() {
        this._courseCount = 4;
    }
}
