"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 20;
console.log(x);
let y = 12;
let z = 12;
let firstName = "João";
let age = 19;
const isAdmin = true;
console.log(typeof firstName);
firstName = "Neto";
console.log(firstName);
const myNumbers = [1, 2, 3, 4, 5];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = { name: "João", age: 19 };
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "123";
id = 123;
const userId = "123";
const productId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.M,
};
console.log(camisa);
let teste;
teste = "algumvalor";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("João"));
function logger(msg) {
    console.log(msg);
}
console.log(logger("teste"));
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá, ${greet} ${name}!`);
    }
    console.log(`Olá ${name}!`);
}
greeting("João", "Bom dia");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 5, n2: 10 }));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
function showArrayItem(arr) {
    arr.forEach((item) => {
        console.log(`item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItem(a1);
showArrayItem(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A idade do usuário é ${this.role}`);
            return;
        }
        console.log("Usuário não autorizado");
    }
}
const joao = new User("João", "admin", true);
console.log(joao);
joao.showUserName();
joao.showUserRole(false);
class Car {
    constructor(brand, wheel) {
        this.brand = brand;
        this.wheels = wheel;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameteres() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameteres()
], Person);
const sam = new Person("sam");
console.log(sam);
