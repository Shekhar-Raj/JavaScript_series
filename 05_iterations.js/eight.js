//Reduce Method--> reduces the array to a single value.

const myNums=[1,2,3]

const newNUm=myNums.reduce(function(acc,currval){
    // console.log(`acc:${acc} and currval:${currval}`);
    
    return acc+currval;
},0)  //here passing 0 as the accumulator value


console.log(newNUm);

//using reduce with arrow function here, 3 is the accumulator
const total=myNums.reduce((acc,currval)=>acc+currval,3)

console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// const prices=shoppingCart.reduce((acc,item)=>acc+item.price,0)



// calculate total price using for each loop
let totalPrice = 0;
shoppingCart.forEach(item => {
    totalPrice += item.price;
   
});
console.log(totalPrice);


