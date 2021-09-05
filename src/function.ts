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
