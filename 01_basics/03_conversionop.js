// let score=33;  //Number

let score="33";     //String

let valueInNumber=Number(score);

let test=null;
console.log(typeof test);   // Object

let valueInNumber2=Number(test);
console.log(valueInNumber2);   // ) (zero 0) output

// console.log(typeof score);
console.log(typeof(score))  //Number type

console.log(typeof valueInNumber);  //number

console.log(valueInNumber)  // NaN output

//Notes
//**  Output of converting different strings into Number **

// "33" => 33  string to number
// "33abc"=>NaN  if we try to convert into Number
// "true"=> 1; false =>0
// null => 0


let isLogggedIn=1
let booleanIsLoggedIn=Boolean(isLogggedIn);
console.log(booleanIsLoggedIn);  //true
console.log(typeof booleanIsLoggedIn);  //boolean

//** Outcomes of converting into boolean type **

// 1 =>true
// "" => false
// "Raj" => true

//  ***** *****************************OPERRATIONS *********************************************************

let value=3
let negvalue=-value

console.log(negvalue);

// String opertions

console.log("1"+2);    // here the output is 12 , Whenever string is first then it converts all the remaining into strings!
console.log(1+"2")     // here also the output is 12

console.log("1"+2 +2) // output --> 122

console.log(1+2+"2")  //output -->32  , Whenever number is first then it performs all the operations of number and then add string into it.
console.log("2"+33+34)
console.log("1"+"2");   // Here a oyutput is 12 but as a string


console.log(+true)  //ouput -->1
console.log(+"");   //output-->0 