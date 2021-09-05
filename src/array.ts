// array
let array: number[];
array = [1, 2, 3];

let array2: string[];
array2 = ["string1", "string2", "string3"];

let array3: any[];
array3 = [1, "ini string", true, {}, "reza", false, "hehehe"];

// tuples => sebuah array yang isinya bisa menggunakan berbagai macam tipe data, tetapi nilai/itemnya terbatas.
let biodata: [string, number];
biodata = ["Malang", 254];
// biodata = ["Aceh", true];
// biodata = ["Bandung", 104, false];
// => tidak boleh ada lebih dari 2 nilai di dalam array, karena sudah ditentukan.
