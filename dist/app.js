"use strict";
// union and Intersection types
Object.defineProperty(exports, "__esModule", { value: true });
function GetProduct(id) {
    console.log(id);
}
GetProduct(102);
GetProduct("ID123");
GetProduct(true);
const admin = {
    id: 123,
    name: "Omar",
    isAdmin: true
};
console.log(admin);
const handle = (action) => {
    console.log("Action :", action);
};
handle("start");
handle("submit");
// Defining classes
class Persone {
    name;
    age;
    constructor() {
        this.name = '';
        this.age = 0;
    }
    greet() {
        console.log(`hello ${this.name}`);
    }
}
// user 1
const user = new Persone;
user.name = "Md. Omar";
user.age = 21;
console.log(user.name, "and", user.age);
user.greet();
// user 2
const user2 = new Persone;
user2.name = "Md. Faruk";
user2.age = 20;
console.log(user2.name, "and", user2.age);
user2.greet();
// Constructor and modifiers (public, private, protected)
//Constructor
class AllData {
    name;
    age;
    IsActive;
    AllRoll;
    Info;
    constructor(name, age, IsActive, AllRoll, Info) {
        this.name = name;
        this.age = age;
        this.IsActive = IsActive;
        this.AllRoll = AllRoll;
        this.Info = Info;
    }
    GET() {
        console.log(`Hello Md: ${this.name}`);
    }
}
const NewUser = new AllData("Omar", 21, false, [10, 201], ["tamim", 214, true]);
NewUser.GET();
console.log(NewUser.name, NewUser.age, NewUser.IsActive, NewUser.AllRoll[0], NewUser.Info);
const NewUser2 = new AllData("Faruk", 40, true, [1, 21], ["sumi", 21, false]);
console.log(NewUser2.name, NewUser2.age, NewUser2.IsActive, NewUser2.AllRoll[0], NewUser2.Info);
//modifiers (public, private, protected)
class BankAcc {
    AccName;
    AccBalance;
    AccType;
    constructor(AccName, AccBalance) {
        this.AccName = AccName;
        this.AccBalance = AccBalance;
        this.AccType = 'Savings';
    }
    showBalance() {
        console.log(`Your account Balance: ${this.AccBalance}`);
    }
}
const Acc1 = new BankAcc('Omar', 1000);
console.log(Acc1.AccName);
Acc1.showBalance();
class mul {
    name;
    constructor(name) {
        this.name = name;
    }
    cat() {
        console.log(`${this.name} Mao Mao`);
    }
}
// Inheritance
class Dog extends mul {
    dog() {
        console.log(`${this.name} gao gao`);
    }
}
const myAnimal = new Dog("Cat");
myAnimal.cat();
const myAnimal2 = new Dog("Dog");
myAnimal2.dog();
class Car {
    start() {
        console.log("Car Start");
    }
    stop() {
        console.log("Car Stop");
    }
}
const MyCar = new Car;
MyCar.start();
MyCar.stop();
class Cara {
    brand;
    speed;
    years = 2026;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(`The ${this.brand} car is moving at ${this.speed} km/h.`);
    }
}
class SubCar extends Cara {
    charg() {
        console.log(`${this.brand}. ${this.years} is charging...`);
    }
}
const tesla = new SubCar('Tesla Model 3', 122);
console.log(tesla.brand);
tesla.charg();
// Generic functions and interfaces
function logData(data) {
    console.log(data);
}
logData("Omar");
logData(201);
logData(true);
logData(["Hello", "Hi"]);
//# sourceMappingURL=app.js.map