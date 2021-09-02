/*
What is scope?
Js has both LOCAl and Global scope
*/

var x = 12;

function scope() {
    var x = 33;
    var y = 10;
    console.log(x);
}
scope(); //logs 33
console.log(x); // logs 12

//example 2
var x = 12;

function scope() {
    x = 33;
    console.log(x);
}
scope()
console.log(x);
