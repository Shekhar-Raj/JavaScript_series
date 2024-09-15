// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//JavaScript is a dynamic language and not static, 
//which means that variables can hold values of different types during runtime.

// 1. Primitive Datatype --> Call by Value

//7 types : String,Number,Boolean,Null,Undefined,Symbol,BigInt

const score=100;
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null;
let userEmail

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);  // o/p --> false, symbol helps to differentiate

const bigNumber= 753211215013012212212n   // n is used to represent BigInt
 

// 2.Non Primitive (Reference Type)

// -->Arrays,Objects,Functions

const heroes=["Shaktiman","Naagraj","ironman"]      //Array

//Object
const student={
    name:"Raj",
    Roll_no:325834,
    Course:"B.Tech",

}

// console.log(student.name);

//Function

const myFunction=function(){
    console.log("hello World");
    
}

// console.log(typeof bigNumber);


//*************************STACK AND HEAP MEMORY IN JAVASCRIPT */

//Stack(Primitive)  , Heap(Non-Prinitive)

//ex-1 for stack

let channelname="Raj";

let anothername=channelname;
anothername="Shekhar"

console.log(anothername);  // here the copy is created in stack due to which if we later change the anothername the original channelname value does not change!.

//Example for heap

let UserOne={
    username:"user@google.com",
    upi_id:"user@ybl",
}

let UserTwo=UserOne;



UserTwo.username="rambo@gmail.com"
UserOne.username="rambo2@gmail.com"

// So Either changing the values of Object UserOne or UserTwo there is change in original values of the object, 
// no extra copy is created like in Stack Memory.
console.log(UserOne.username);
console.log(UserTwo.username);