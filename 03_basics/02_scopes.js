//Global and Local Scope in JavaScript

// Scope determines the accessibility  of variables , objects and functions from different part of code.

let sum=34;   // Global Scope


// ******** BLOCK SCOPE {} --> Variables declared inside the block are cannot be accessed from outside the block.
for(let i=1;i<=4;i++){
    console.log(i);         
    
}

// console.log(i);  // this will give error because i can only be used in the block



// **** FUNCTION SCOPE
function Calsum(a,b){
    let sum=a+b;            // function scope--> variables declared inside the fumction are not accessible outside the function.
    console.log(sum);
}

Calsum(3,4) //o/p --> 7

console.log(sum); // o/p is  34

//*********NESTED SCOPE */

function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
        
    }

    // console.log(website)
    two()
}

one()

if(true){
    const username="rambo35@gmail.com"
    if(username==="rambo35@gmail.com"){
        const website="outlook";
        console.log(username+ website);
    }
    // console.log(website);  // This line gives error because the website is accessed outside the block.
    
}

// console.log(username)      // This code also gives err because we are trying to access the username outside the block.

//********************HOISTING CONCEPT */

console.log(addone(5));      // here in function we can also call it above the function

function addone(num){
    return num+1
}


// console.log(addtwo(5));  // Here it gives error, because we have declared it in a variable, and before declaring variable we cannot call it, this is called as hoisting


const addtwo=function(num){
    return num+1
}

