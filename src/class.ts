// class -> prototype
// this.name -> public name, 'name' setelah this.name -> constructor(name: string)

// basic inheritance
export class User {
  name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  // validasi
  setName(value: string): void {
    this.name = value;
  }

  // mengambil data
  getName = (): string => {
    return this.name;
  };
}

// public => bisa diakses di semua class/dari luar class
// protected => hanya bisa diakses dari class tersebut, dan kelas turunannya
// private => hanya bisa diakses dari class tersebut/itu sendiri

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  // static getRoleName: string = "Admin"; // static property

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  // static method
  static getNameRole() {
    return "hei";
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  // tidak boleh pake void
  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email tidak valid";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin("628123456789", "Reza", 18);
// admin.getName();
// admin.getRole();
// admin.setName("apa");
// admin.phone;

// admin.email = "reza@gmail.com";
// console.log(admin.email);

let admin = Admin.getNameRole();
console.log(admin);
