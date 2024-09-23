// For of loop

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}


const greetings="hello world!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//Maps -->The Map object holds key-value pairs and remembers the original insertion order of the keys.,
//Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. 
//A Map object is iterated by key-value pairs

const map=new Map()
map.set('a',23);
map.set('b',56);
map.set('c',35);

// console.log(map.get('a'));   //p/p-->23
// console.log(map.set('a',45)) /// o/p--> 45 , a updated to 45
// console.log(map);

//for of loop on map

for(const [keys,values] of map){
    console.log(keys, ':-',values);
    
}

//**************FOR OF LOOP DOES NOT WORK FOR OBJECTS */