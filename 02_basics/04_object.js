// const tinderUser=new Object()   //Singleton Object

const tinderUser={}            // Non-Singleton Object

tinderUser.id='3ef232'
tinderUser.name="Gabrel"
tinderUser.isLoggedIn=false;


// console.log(tinderUser);

const regularUser={
    email:"random@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Raj",
            lastname:"Shekhar"

        }
    }

}


console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//Object.assign is used to merge two objects

// const obj3=Object.assign(obj1,obj2)  //Method 1 using assign
// const obj3=Object.assign({},obj1,obj2)  // **more important **,Method 2 using assgin

const obj3={...obj1,...obj2}  // 90% (mostly) used, spread method is most widely used to join two or more objects
// console.log(obj3);


console.log(tinderUser);

//Object.keys is used to find the keys in an object
console.log(Object.keys(tinderUser));

//Object.values is used to find the values in an object
console.log(Object.values(tinderUser));

//Object.entries-->Returns an array of key/values of the enumerable properties of an object

console.log(Object.entries(tinderUser));

// Object.hasOwnProperty--> Determines whether an object has a property with the specified name
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


