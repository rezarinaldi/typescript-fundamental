"use strict";
// generic -> tipe data yang dinamis
function getData(value) {
    return value;
}
console.log(getData("Reza").length);
console.log(getData(123).length);
// generic
function myData(value) {
    return value;
}
console.log(myData("Reza").length);
console.log(myData(123));
// generic - arrow function
// tsx -> <T, >, <T extends {}, unknown>
var arrowFunc = function (value) { };
