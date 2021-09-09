// string -> huruf
let nama: string = "Reza";
nama = "string";

// number -> angka
let umur: number;
umur = 21;
umur = 18;

// boolean -> benar atau salah
let isMarried: boolean;
isMarried = true;
isMarried = false;

// any -> tipe data apa saja (banyak tipe data)
let heroes: any = "Batman";
heroes = 20;
heroes = []; // array
heroes = {}; // object
heroes = true || false || "string";

// union type -> tipe data lebih dari 1
let phone: number | string;
phone = 628123456789;
phone = "08123456789";
