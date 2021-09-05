"use strict";
// enum => tipe data yang menyimpan sekumpulan data konstanta.
// numeric enums
// enum Month {
//   JAN = 1,
//   FEB,
//   MAR,
//   APR,
//   MAY,
// }
// console.log(Month.MAR);
// string enums
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "Mei";
})(Month || (Month = {}));
console.log(Month.FEB);
