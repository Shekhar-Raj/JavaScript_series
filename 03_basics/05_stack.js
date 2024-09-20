// Go to Chrome and right click on page and click on inspect and then click on sources.
// run the code given below in sources , mark the breakpoints and see the call stack.

function one(){
    console.log("One");
    two();
}
function two(){
    console.log("Two");
    three();
}
function three(){
    console.log("three")
}
one()
two()
three()