const score=100;
console.log(score);

const balance=new Number(100)
console.log(balance);     // output--> [Number:100]

// console.log(balance.toString());  // Number datatype converts into String datatype.

//The toFixed() method of Number values returns a string representing this number using fixed-point 
//notation with the specified number of decimal places.
console.log(score.toFixed(1));

const othNum=23.8966
console.log(othNum.toPrecision(3));  //output-->23.9

const num=123.8966
console.log(num.toPrecision(3));


const hundreds=100000;
console.log(hundreds.toLocaleString('en-IN'));

//********************************************MATHS********************* */

console.log(Math.abs(-4));  // returns absolute value 
console.log(Math.round(4.3)); //returns the round off value

console.log(Math.ceil(4.3));  // returns the top value , here o/p is 5
console.log(Math.floor(4.9)); // returns the lowest value here o/p is 4.

console.log(Math.min(4,6,8,234,33,3,4.3)); //returns the mininmum value 

//****Math.random */

console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min) //Important formula

