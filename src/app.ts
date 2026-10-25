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
//Constructor
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

//modifiers (public, private, protected)
class BankAcc {
    public AccName: string;
    private AccBalance: number;
    protected AccType: string;
    constructor (AccName: string, AccBalance: number){
        this.AccName = AccName;
        this.AccBalance = AccBalance;
        this.AccType = 'Savings';
    }
    public showBalance(){
        console.log(`Your account Balance: ${this.AccBalance}`)
    }
}
const Acc1 = new BankAcc('Omar', 1000)
console.log(Acc1.AccName)
Acc1.showBalance()



class mul {
    constructor(public name: string){

    }
    cat(){
        console.log(`${this.name} Mao Mao`)
    }
}
// Inheritance
class Dog extends mul {
   dog(){
    console.log(`${this.name} gao gao`)
   }
}
const myAnimal = new Dog("Cat")
myAnimal.cat()
const myAnimal2 = new Dog("Dog")
myAnimal2.dog()


// implements
interface Driveable{
    start: ()=> void;
    stop: ()=> void;
}
class Car implements Driveable {
   start (){
    console.log("Car Start")
   }
   stop () {
      console.log("Car Stop")
   }
}
const MyCar = new Car;
MyCar.start();
MyCar.stop();


// Project 
interface Vehicle {
    brand: string;
    speed: number;
    move(): void;
}
class Cara implements Vehicle{
    protected years: number = 2026

    constructor(public brand: string, public speed: number){
    }

    move(): void {
         console.log(`The ${this.brand} car is moving at ${this.speed} km/h.`)
    }
}

class SubCar extends Cara {
   charg (){
    console.log(`${this.brand}. ${this.years} is charging...`)
   }
}

const tesla = new SubCar('Tesla Model 3', 122)
console.log(tesla.brand)
tesla.charg();



// Generic functions
function logData <T>(data: T){
    console.log(data)
}
logData<string>("Omar")
logData<number>(201)
logData<boolean>(true)
logData<string[]>(["Hello", "Hi"])


class Obj{
    id: number;
    name: string;
    constructor(id: number, name: string){
        this.id = id;
        this.name = name
    }
}
const IdFun = <T extends Obj>(item: T):void=>{
  console.log(item.id)
  console.log(item.name)
}

IdFun({id: 200, name: "Omar"})
function Fun2 <T extends Obj>(items: T):T{
    return items
}
console.log(Fun2({id: 22, name: "Tamim"}))