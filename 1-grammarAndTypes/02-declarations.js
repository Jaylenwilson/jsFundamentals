/*
Variables

1-grammarAndTypes
    02-declarations.js
*/

//what is a variablee
var a = 1;
var b = 2;
console.log(a + b)

//notes on naming variables:
//1)a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) Javascript is case sensitive-- 'hello' and 'Hello' are different variables 

/*
DECLARATIONS, INITALIZATIONS, ASSIGNMENTS
*/

/*
Declarations refer to when we 'declare a variable

Initialazations refer to when a variable is assigned a value

Assignmeent refers to giving a variable a value, This can be after initializations
*/

var x;
console.log('Declaration 1:', x) // undefined

x = 10;
console.log('Initialization 1:', x)//10

x = 33
console.log('Assignment 1:', x); //33

/*
Var, Let, and Const:
var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
const = 'new', declares unchangable variables

*/

let tonight = 'great';
const elevenfifty = 'Amazing';
console.log(tonight, elevenfifty)

tonight = 'lovely!'


