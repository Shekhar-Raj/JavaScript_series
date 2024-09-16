//Singleton

//object literals

const mySym=Symbol("key1")  //** IMPORTANT FOR INTERVIEWS , how to declare symbol in objects*/

const jsUser={
    name:"Raj",
    age:22,
    "full name":"Raj Shekhar",        // We can only use method 2 to access this types of value.
    [mySym]:"mykey1",                 // ** IMP for INTERVEW ,way to declare symbol in an object, can be only accessed using method 2
    location:"Bhatinda",
    email:"Raj@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]

}

//Method 1 to access Object Values
console.log(jsUser.name);

//Method 2 to access Object values
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
//* Special Case
console.log(jsUser[mySym]);  // ** access Symbol Values 


//Adding/change values
jsUser.email="Rajgemini@gmail.com"
jsUser.activeTime="4hr"
Object.freeze(jsUser)  // freeze the values so that no further erdit can be done.
// console.log(jsUser)

// jsUser.email="Rajopenai@gmail.com"
// console.log(jsUser)


jsUser.greeting=function(){
    console.log("Hello! Js User!");
    
}

jsUser.greetingTwo=function(){
    console.log(`Hello!${this.name}`);
    
}

jsUser.greetingThree=function(){
    console.log(`Hello ${this.name}, your email id is ${this.email}`);  // using this
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
console.log(jsUser.greetingThree());


