const myObject={
    js:'javascript',
    cpp:"C++",
    rb:"ruby",
    swift:"swift by app"

}

//for in  ,loop can be used for objects

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`);    // myObject[key] is used to access values
    
}

const programming=["js","rb","py","java","cpp"]

for(const key in programming){
    console.log(programming[key]);
    
}

const map=new Map()
map.set('a',23);
map.set('b',56);
map.set('c',35);

// we cannot use for in loop for maps, as map is not iterable.

// for(const key in map){
//     console.log(key);
    
// }