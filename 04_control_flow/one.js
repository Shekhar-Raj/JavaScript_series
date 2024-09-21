//if

if(2==="2"){
    console.log("executed");
}else{
    console.log("Not Executed!");
    
}

//<, >, <=, >=, !=, ===(strict equal, compares the datatype),!===

const score=200;

if(score>100){
    const power="fly"
    console.log(`User power:${power}`);
}

// console.log(`User power:${power}`);   // power is not defined in this 

const balance=100

if(balance>5000) console.log("test");     //Implicit Scope

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
    
// }else if(balance<900){
//     console.log("less than 900");
    
// }else{
//     console.log("Greater than all above conditions");
    
// }

const userLoggedIN=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true

if(userLoggedIN && debitCard){  // using and operator
    console.log("Allow to buy courses");
    
}

if(loggedInFromEmail || loggedInFromEmail){   //using OR operator
    console.log("User logged in");
    
}