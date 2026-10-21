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
//# sourceMappingURL=app.js.map