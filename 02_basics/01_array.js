raj2002shekhar
hCaGk73W6u85YfJ4


//Array

//--> Array is Type of Object, and a Non-Primitive Datatype.
//--> JS Array are resizeable
//-->

const myArr=[35,452,3,true,34.5,3,5,8]     // method 1 to declare an array
console.log(typeof myArr);
console.log(myArr);

const myArr2=new Array(1,34,6,2,9,4,2)    // method 2 to declare an array
console.log(`Array no 2 is ${myArr2}`);

myArr.push(true);  //push add elements to the end of array
console.log(myArr);

myArr.pop()       //pop deletes from end and returns it
console.log(myArr);

// myArr.unshift(67) //adds the element to the starting of the array
console.log(myArr);

myArr.shift()  //removes the first element from the array
console.log(myArr);

console.log(myArr.includes(true))  //searches for a value

//returns the index of an elemen in an array
//returns -1 if an element does not exist
console.log(myArr.indexOf(34.5));


// join-->Adds all the elements of an array into a string, separated by the specified separator string.
const newArr=myArr.join()
console.log(newArr);
console.log(typeof newArr);

//Slice
//-> slice does not includes the end element, and does changes in the original arrray 
// instead do it in the copies

let myarr1=myArr.slice(1,3)
console.log("original Array ",myArr);
console.log("A ", myarr1)

console.log("original Array ",myArr);

//****Splice */

//splice -->removes/replaces/add elements in place
//--> Splice includes the end element,and it changes in the original array

let myarr2=myArr.splice(1,3)
console.log("B",myarr2);
console.log("original Array ",myArr);

let colors=["red","yellow","blue","orange","pink","white"]

//**SPlice more features */
//splice(start,deleteCount,item 0......item N)

colors.splice(4) //delete all elements from 4th position including 4th element
// console.log(colors);

colors.splice(0,1); //0th position se sirf 1 element delete hoga
console.log(colors);


// 0th position se sirf 1 element delete hoga and elements writtten inside array will be added to the array 
colors.splice(0,1,"black","grey","golden")


console.log(colors);
