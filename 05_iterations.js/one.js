// For Loop

for(let i=0;i<10;i++){
    const element=i;
    if(element==5){
        console.log("5 is the best number");
        
    }
    console.log(i);
    
}

for (let i = 0; i <=10; i++) {
    // console.log(`Outer loop ${i}`);
    
    for (let j = 0; j <=10; j++) {
        // console.log(`Inner Loop ${j}`);
    }
}

let supes=["Iron man","Thor","Captain America"]

for (let i = 0; i < supes.length; i++) {
    const element = supes[i];
    console.log( element);
}

//break and continue

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`${index} is detected`);
        break;                                    // break comes out of the loop and nothing is executeed afterwards.
    }
    console.log(`Value of index is ${index}`);
}


for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`${index} is detected`);
        continue;                                    // continue skips the value and continues the loop!
    }
    console.log(`Value of index is ${index}`);
}