const userEmail=""

if(userEmail){
    console.log("Got user Email");  // we have not checked any condition , and it is assuming a string  as a true value.

    
}else{
    console.log("don't have user Email");
    
}

//***IMPORTANT FALSY VALUES */
//--> false, 0, -0(Negative Zero), BigInt 0n, ""(Empty String), null, undefined, NaN

//*******AND REST REMAINING ARE THE TRUTHY VALUES */

//important truthy values-->
//--> function(){} (Empty Function), "0"(zero inside string), 'false', " ", [](Empty Array), {}(Empty Object), 

const array=[]
if(array.length===0){        //way ti check array
    console.log("Array is Empty");
    
}

const emptyObj={}     // Way to check whether an Object is Empty or not.

if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
    

}

//Nullish Coalescing  Operator(??):made for null and  undefined

let val1;
// val1=5 ?? 10     //o/p--> 5

// val1=null??10    //o/p-->10

// val1=undefined ?? 15     //o/p-->15

val1= null ??45 ??30    //o/p--> 45


console.log(val1);

//Terniary Operator

// condition?true:false

const iceTeaPrice=45
iceTeaPrice<=80?console.log("less than 80"):console.log("Greater than 80");

