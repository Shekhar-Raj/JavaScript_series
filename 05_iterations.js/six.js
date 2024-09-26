const myNums=[1,2,3,4,5,6,7]

//using filter method--> Returns the elements of an array that meet the condition specified in a callback function.

//using arrowe function as a callback
const newNum=myNums.filter((num)=>num>4)
console.log(newNum);

//using arrow function
const Num=myNums.filter((num)=>{
    return num>4;
})
console.log(Num);

//using normal function
const filter=myNums.filter(function(num){
    return num>4;
})

console.log(filter);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// extract history genre
// const userBooks=books.filter((bk)=> bk.genre==="History");
// console.log(userBooks);

//books published after year 2000
// const bookyear=books.filter((yr)=>yr.publish>2000 );
// console.log(`books published after 2000 are` ,bookyear);

// books published after year 1995 with genre history

const intrested=books.filter((like)=>like.publish>1995 && like.genre==='History')
console.log(intrested);



