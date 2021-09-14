// generic -> tipe data yang dinamis
function getData(value: any) {
  return value;
}

console.log(getData("Reza").length);
console.log(getData(123).length);

// generic
function myData<T>(value: T) {
  return value;
}

console.log(myData("Reza").length);
console.log(myData(123));

// generic - arrow function
// tsx -> <T, >, <T extends {}, unknown>
const arrowFunc = <T>(value: T) => {};
