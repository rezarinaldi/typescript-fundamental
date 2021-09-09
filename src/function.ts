// tipe data pada balikan function

// string
function getName(): string {
  return "hello, my name is Reza";
}

console.log(getName());

// number
function getAge(): number {
  return 21;
}

// void => tidak boleh menggunakan return
function printName(): void {
  console.log("print name");
}

printName();

////////////

function multiply(val1: number, val2: number): number {
  return val1 * val2;
}

const result = multiply(12, 5); // static typing
console.log(result);

// function as type (tipe data)

type Tambah = (val1: number, val2: number) => number;

// arrow function
const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

// default parameter
const fullName = (first: string, last: string = "Rinaldi"): string => {
  return first + " " + last;
};

console.log(fullName("Reza"));
