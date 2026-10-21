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