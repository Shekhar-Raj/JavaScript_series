//Dates

//The typeof date is Object ***************

let myDate=new Date()

// console.log(typeof myDate)    --> Object type

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());


let myCreatedDate= new Date(2024,8,15)  //(year,month,date)
console.log(myCreatedDate.toDateString());

// let myCreatedDate= new Date(2024,8,15,11,7) 
// console.log(myCreatedDate.toLocaleString());  // output--> 9/15/2024, 11:07:00 AM

// let myCreatedDate= new Date("2024-09-15")   //(yy-mm-dd)
// console.log(myCreatedDate.toLocaleString())   //o/p --> 9/15/2024, 5:30:00 AM

let date=new Date("01-15-2024")      //(mm-dd-year)
console.log(date.toLocaleString());  // 0/p --> 1/15/2024, 12:00:00 AM

let myTimeStamp=Date.now()
console.log(myTimeStamp)

console.log(date.getTime());

console.log(Math.floor(Date.now()/1000))



let newDate= new Date()
console.log(newDate.getDate());   // using getDate() method to extract only the date

console.log(newDate.getHours());

// +1 is added to get the exact month, otherwise js months starts from 0 due to ehich the user might get confused.
console.log(newDate.getMonth()+1); 

//******* IMPORTANT ,ANOTHER WAY TO DISPLAY TIME AND DATE***** */
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:'long',
    day:'numeric',  // to display date
}));

//output --> Sunday, September 15
