const myNums=[1,2,3,5,6,7,8,9,10]

//using map function to add 10 to each element .
// const newNum=myNums.map((num)=>num+10);
// console.log(newNum);

//using multiple map and filter.
const Nums=myNums
            .map((num)=> num *10)
            .map((num)=>num+1)
            .filter((num)=>num>=40)

console.log(Nums);
