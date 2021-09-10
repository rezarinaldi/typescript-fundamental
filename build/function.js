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
// optional parameter, setelah '?' undefined (jika parameter kedua tidak diisi)
// number tidak dapat diberi tanda '?' (optional), tapi kalau return/kembaliannya string, maka tidak ada masalah
// di typescript error, ketika dicompile ke javascript tidak ada masalah,
// karena kita dapat pengaman dari typescript
var getUmur = function (val1, val2) {
    // return val1 + val2;
    return val1 + " " + val2;
};
console.log(getUmur(10, 25));
