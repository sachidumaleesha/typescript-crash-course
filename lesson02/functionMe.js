"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
    return true;
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var sayHello = function (s) {
    return "";
};
addTwo(2);
getUpper('diwan');
signUpUser('diwan', 'diwan@google.com', '1234', true);
loginUser('admin', 'admin@gmail.com');
var heros = ['thor', "spiderman", 'batman', 'superman'];
var data = [1, "2", true];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
// only accept string value and only return string value
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
