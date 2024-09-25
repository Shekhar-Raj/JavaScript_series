// for each loop

const programming=["js","rb","py","java","cpp"]

// programming.forEach(function(items){
//     console.log(items);

// })


//using arrow functions
// programming.forEach((items)=>{
//     console.log(items);
// });


//using another method

// function printMe(items){
//     console.log(items);
    
// }
    
// programming.forEach(printMe)


// programming.forEach((item,index,arr)=>{   //we can also print items,index and whole array using forEach.
//     console.log(item,index,arr);
    
// });

// for each is also used to access objects inside the array
const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
         languageName:"python",
        languageFileName:"py"
    },
    {
         languageName:"C++",
        languageFileName:"cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})