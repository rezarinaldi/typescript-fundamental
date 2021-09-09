"use strict";
// tipe data pada balikan function
// string
function getName() {
    return "hello, my name is Reza";
}
console.log(getName());
// number
function getAge() {
    return 21;
}
// void => tidak boleh menggunakan return
function printName() {
    console.log("print name");
}
printName();
////////////
function multiply(val1, val2) {
    return val1 * val2;
}
var result = multiply(12, 5); // static typing
console.log(result);
// arrow function
var Add = function (val1, val2) {
    return val1 + val2;
};
// default parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Rinaldi"; }
    return first + " " + last;
};
console.log(fullName("Reza"));
