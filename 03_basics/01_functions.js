//function is a type of keyword.

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
    
}

// sayMyName //only function name is called as reference.
// sayMyName()  // This is called as execution.


//function to add two numbers

// function addTwoNumbers(num1,num2){   //**** */ here num1,num2 are called as parameters, because they are made at time of function definition.
//     let sum=num1+num2;
//     console.log(sum);
    

// }

// addTwoNumbers(3,5)  //**values passed inside at time of function calling is called as arguemnets.

function addTwoNumbers(num1,num2){   
    // let sum=num1+num2;
    // return sum;

    //or

    return num1+num2
    

}
// const result=addTwoNumbers(3,5);

// console.log("Result", result);

function LoginUserMessage(username="Sam"){  // here sam is set as default value, if user does enter any username then sam name will be used as a default username.
    if(!username){   //if(username===undefined) this is same as written in the if statement
        console.log("Please enter a username");
        return
        

    }
    return (`${username} just logged in`)

}

console.log(LoginUserMessage("madhav"));     //using console.log to print the the return statement

//***IMPORTANT FOR INTERVIEWS */
// console.log(LoginUserMessage());   // if we don't pass anything in arguement the o/p ---> undefined just logged in

// ***********FUNCTIONS WITH OBJECT AND ARRAY IN JAVASCRIPT

//The rest parameter(...) syntax allows a function to accept an indefinite number of arguments as an array.

function calculateCartPrice(val1,val2,...num1){  
    return num1

}

// console.log(calculateCartPrice(1,2,3)); // we  can use multiple arguements. o/p--> [3], because 1 and 2 are gone to val1,val2.

const user={
    username:"martin@87",
    price:199

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
    

}

// handleObject(user)  calling the function with object as the arguement.

// we can also directly pass object

handleObject({
    username:"Gabriel@34",
    price:455
})

const newArray=[200,400,1000,600]

function returnsecondvalue(getArray){
    return getArray[2]
}

console.log(returnsecondvalue([4999,323,32,2,3,32]));  // we can directly pass the value 
console.log(returnsecondvalue(newArray)); // we can also call the arguement declared