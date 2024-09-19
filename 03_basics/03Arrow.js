const user={
    username:"jack352@gmail.com",
    price:999,

    WelcomeMessage:function(){
        console.log(`Welcome to the arena ${this.username} `)   // here this refers to the object!
    }
}


console.log(user.WelcomeMessage());
user.username="Sparrow45@gmail.com"

console.log(user.WelcomeMessage()); // automatically takes new username because of this!

//**********IMPORTANT FOR INTERVIEWS */
console.log(this) // In node Env it gives empty {},but in browser it gives the Window Object!.


///***********ARROW FUNCTION*****/

//Normal Arrow function(EXPLICIT RETURNS)

const two=(num1,num2)=>{
    return num1+num2
}

console.log(two(3,4))

//****** IMPORTANT FOR INTERVIEWS AND REACT */
//Implicit Returns

const three=(a,b)=>(a+b)
console.log(three(3,5)) /// here we are using round brackets, and no need to return , it returns automatically.


