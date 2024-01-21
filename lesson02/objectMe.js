"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'diwan',
    email: 'diwan@google.com',
    isActive: true
};
// worst thing in typescript
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var userDetails = { name: 'diwan', isPaid: true, email: 'd@d.com' };
createUser(userDetails);
function createCourse() {
    return { name: 'next js', price: 499 };
}
function createUniqueUser(user) {
}
createUniqueUser({ name: 'diwan', email: 'd@google.com', isActive: true });
var firstUser = {
    _id: '1234',
    name: 'diwan',
    email: 'diwan@gmail.com',
    isActive: true
};
var dd = {
    cardnumber: '',
    cardDate: '',
    cvvNumber: ''
};
console.log(dd);
