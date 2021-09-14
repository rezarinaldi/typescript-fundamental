class List<T> {
  private data: T[];

  // res parameter -> ...elements
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]) {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

// maka pemanggilannya tanpa perlu menggunakan array
// let numbers = new List<number>(1, 2, 3);
// numbers.add(4);
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll());

let random = new List<number | string>(1, "Reza", "Rinaldi", 2);
random.add("yes");
random.add(99);
random.addMultiple(321, "print");
console.log(random.getAll());
