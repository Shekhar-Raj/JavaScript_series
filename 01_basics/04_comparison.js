console.log("2">1)  // Js automatically converts a string into a number --> output true
console.log("02">1);  // Js automatically converts a string into a number --> output true
console.log("0">=false); //true because false is 0 !


// The reason is that the comparison == and equality >< >= <= works differently .
//Comparisons converts the null to a number treating it as 0, that's why the (3) null>=0 is true and null>0 is false!
console.log(null>0);  //false 
console.log(null==0); //false
console.log(null>=0); //true

//js automatically converts undefined into (NaN) type Not a Number!
console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined>=0); //false

console.log("3"===2); //false ,it operator (===) compares the datatype without converting the datatype.
