const name="raj"   //This is typeof string
const repo=30

console.log(`Hello My name is ${name} and i have ${repo}+ repositories`);

const user=new String("Samuel");     // This String typeof is object.

console.log(user[0]);
console.log(user.length)   //6 will be the output.

//Methods 

console.log(user.toUpperCase());   //ToUppercase
console.log(user.charAt(3));        //ToL
console.log(user.indexOf('m'));


let userTwo="Shekhar-Raj"

//Substring Method(start,end);
const newString=userTwo.substring(0,4);
const trial=userTwo.substring(-10,2)  // we cannot give negative values to the substring.
console.log(newString);
console.log(trial);

//Slice --> returns a aprt of original string as a new string
const slice=userTwo.slice(-11,4);
console.log(slice)

//Trim --> trims whitespaces from both ends of string & return a new one
let msg="     Hello        "
msg.trim();

//replace --> searches a value in the string and return a new string with value replaced.

let url="https://shekhar.com/shekhar%20raj"

console.log(url.replace("%20","-"));

//includes --> to to confirm whether a particular string is present or not
console.log(url.includes("raj"));

//split-->
//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, 
//puts these substrings into an array, and returns the array.

const str1='The quick brown fox jumps over the lazy dog.';
const words=str1.split(' ')  //split on the space
console.log(words[3]);

const chars=str1.split('')  //splits the string on every letter
console.log(chars);

const strCopy=str1.split()  // Converts the sring into array
console.log(strCopy);

// console.log(user.__proto__)   ]