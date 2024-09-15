// To check whether the given input is array or not , we use  Array.isArray

console.log(Array.isArray("Shekhar"));    //o/p --> false

// Array.from is used to convert into array
console.log(Array.from("Shekhar"));   //o/p -->['S', 'h', 'e','k', 'h', 'a','r']

/***IMPORTANT FOR INTERVIEWS */
console.log(Array.from({name:"Shekahr"}));  // returns [] empty array if not specified, whether to make array using keys or values.

//Array.of  --> Returns a new array from a set of elements.

const score=100;
const score2=200;
const score3=300;

console.log(Array.of(score,score2,score3));  //o/p - [ 100, 200, 300 ]


//Concatinate

const marvel_heros=["Thor","Iron man","Hulk","Spiderman"];
const dc_heros=["superman","flash","Batman"];

//Concat  --> returns a new array, that's why 
const allHeros=marvel_heros.concat(dc_heros);
console.log(allHeros);

//******** SPREAD OPERATOR **********/

// can also be used instead of concat
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

//***flat */
//--> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array=[1,2,3,4,[5,6,8,6],[2,9,[20,53,3]]]

const new_another_array=another_array.flat(Infinity)
console.log(new_another_array);  //o/p-->[1, 2, 3, 4,  5,  6,8, 6, 2, 9, 20, 53,3] , all the sub array are merged into one array



