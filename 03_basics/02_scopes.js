//Global and Local Scope in JavaScript

// Scope determines the accessibility  of variables , objects and functions from different part of code.

let sum=34;   // Global Scope


// ******** BLOCK SCOPE {} --> Variables declared inside the block are cannot be accessed from outside the block.
for(let i=1;i<=4;i++){
    console.log(i);         
    
}

console.log(i);  // this will give error because i can only be used in the block



// **** FUNCTION SCOPE
function Calsum(a,b){
    let sum=a+b;            // function scope--> variables declared inside the fumction are not accessible outside the function.
    console.log(sum);
}

Calsum(3,4) //o/p --> 7

console.log(sum); // o/p is  34
