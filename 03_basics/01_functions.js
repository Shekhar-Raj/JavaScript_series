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
    if(!username){   //if(username===undefined) this is same as written in the line
        console.log("Please enter a username");
        return
        

    }
    return (`${username} just logged in`)

}

console.log(LoginUserMessage("madhav"));     //using console.log to print the the return statement

//***IMPORTANT FOR INTERVIEWS */
// console.log(LoginUserMessage());   // if we don't pass anything in arguement the o/p ---> undefined just logged in