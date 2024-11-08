// string, number, boolean, null, undefined, symbol, bigint, object, function, any
let x: number = 10;

x = 20;

console.log(x);

// inferencia x annotation
let y = 12;
// y = "teste"

let z: number = 12;

// tipos básicos
let firstName: string = "João";
let age: number = 19;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName);

firstName = "Neto";

console.log(firstName);

// objetos
const myNumbers: number[] = [1, 2, 3, 4, 5];

console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

// tuplas -> tuple
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]];

// myTuple = [true, false, true]

// object literals -> {prop: value}
const user: { name: string; age: number } = { name: "João", age: 19 };

console.log(user);
console.log(user.name);

// any
let a: any = 0;
a = "teste";
a = true;
a = [];

// union types
let id: string | number = "123";

id = 123;

// id = true;
// id = [];

// type alias
type myIdType = number | string;

const userId: myIdType = "123";
const productId: myIdType = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa: { name: string; size: Size } = {
  name: "Camisa gola V",
  size: Size.M,
};

console.log(camisa);

// literal types
let teste: "algumvalor" | null;

// teste = "outrovalor"
teste = "algumvalor";
teste = null;

// funções
function sum(a: number, b: number) {
  return a + b;
}
console.log(sum(1, 2));
// console.log(sum('12', true))

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

console.log(sayHelloTo("João"));

function logger(msg: string): void {
  console.log(msg);
}

console.log(logger("teste"));

logger("Teste!");

function greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`Olá, ${greet} ${name}!`);
  }
  console.log(`Olá ${name}!`);
}

greeting("João", "Bom dia");
// greeting("João");

// interface
interface MathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
  return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 5, n2: 10 }));

// narrowing
// checagem tipos
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);

// generics
function showArrayItem<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`item: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrayItem(a1);
showArrayItem(a2);

// classes
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }
  showUserRole(canShow: boolean) {
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

// interface em classes
interface IVehicle {
  brand: string;
  showBrand(): void;
}
class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheel: number) {
    this.brand = brand;
    this.wheels = wheel;
  }

  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

// herança
class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);
a4.showBrand();

// decorators

// constructor decorator
function BaseParameteres() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@BaseParameteres()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("sam");
console.log(sam);
