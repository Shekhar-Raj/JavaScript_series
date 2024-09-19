//IIFE - Immediately Invoked Functions Expression

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// #Avoid polluting the global namespace--> Because our application could include many functions and global variables 
//from different source files,  it's important to limit the number of global variables

(function execute(){   //named IIFE because the function has the name.
    console.log("Connected to DB")
})();  // ;=semicolon(;) is must method to end a single IIFE.


(()=>{    //It is simple IIFE because it has no name
    console.log("Hello Raj")
}) ();


((name)=>{
    console.log(`Hello ${name}`)
}) ("Samuel"); 



( function addsum(num1,num2){
    console.log(num1+num2);
    
}) (7,3);          