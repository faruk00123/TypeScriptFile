// union and Intersection types

// 1 union types(|)
type ProductID = string | number | boolean
function GetProduct(id: ProductID){
   console.log(id)
}
GetProduct(102)
GetProduct("ID123")
GetProduct(true)

// 2 Intersection type (&)
type User = {
    id: number;
    name: string;
}
type Admin = {
    isAdmin: boolean;
}
type AdminUser = User & Admin;

const admin: AdminUser = {
    id: 123,
    name: "Omar",
    isAdmin: true
}
console.log(admin) 



// literal types 
type Action = 'start' | 'pause' | 'submit' | 'reset';
const handle = (action: Action)=> {
    console.log("Action :", action)
}
handle("start")
handle("submit")


// Defining classes
class Persone {
    name: string;
    age: number;
    constructor(){
        this.name = '';
        this.age = 0;
    }

    greet(){
        console.log(`hello ${this.name}`)
    }
}
// user 1
const user = new Persone;
user.name = "Md. Omar"
user.age = 21
console.log(user.name ,"and", user.age)
user.greet()

// user 2
const user2 = new Persone;
user2.name = "Md. Faruk"
user2.age = 20
console.log(user2.name ,"and", user2.age)
user2.greet()


// Constructor and modifiers (public, private, protected)
class AllData {
    name: string;
    age: number;
    IsActive: boolean;
    AllRoll: number[];
    Info?: [string, number, boolean] 

    constructor(name: string, age: number, IsActive: boolean, AllRoll: number[], Info: [string, number, boolean]){
        this.name = name;
        this.age = age;
        this.IsActive = IsActive;
        this.AllRoll = AllRoll;
        this.Info = Info
    }

    GET(){
        console.log(`Hello Md: ${this.name}`)
    }
}

const NewUser = new AllData("Omar", 21, false, [10, 201], ["tamim", 214, true])
NewUser.GET()
console.log(NewUser.name, NewUser.age, NewUser.IsActive, NewUser.AllRoll[0], NewUser.Info)

const NewUser2 = new AllData("Faruk", 40, true, [1, 21], ["sumi", 21, false])
console.log(NewUser2.name, NewUser2.age, NewUser2.IsActive, NewUser2.AllRoll[0], NewUser2.Info)