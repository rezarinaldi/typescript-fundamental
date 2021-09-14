"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Asus_1 = __importDefault(require("./Asus"));
var Macbook_1 = __importDefault(require("./Macbook"));
var asus = new Asus_1.default("Zenbook", true, true);
console.log(asus);
var macbook = new Macbook_1.default(2017, false, false);
console.log(macbook);
macbook.a();
macbook.b();
