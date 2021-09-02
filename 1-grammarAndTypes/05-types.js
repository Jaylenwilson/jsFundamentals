/*
TYPES
1-grammarAnd

*/

//Boolean
var on = true

// boolena can represent: true/false yes/no on/off , 0/1

//Undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null
/*
Null means a variable has been declared and assigned a value of null
*/

var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside think of it
this way null values arre for gag gifts that are boxes intentilly given
with nothing inside because thats the gag Undefined values are gifts given
when the person giving the gifts has forgotten to put the gift inside

*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge)

let precise = 99999999999999
console.log(precise);

let rounded = 99999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//String
// string is any value within quotes javascript spits out the value within the quotes 
let stringOne = "doubl quotes"
let stringTwo = "single quote";

//string concatenation vs addition
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

let third = 1050 + '100';
console.log(third); //1050100
console.log(typeof third);

//interpolation
// lets you use strings with dynamic content (they require backsticks)

//Example 1:
let age = 21;
let string = `my age is: ${age}`
console.log(string)


//Objects 
/*
what is an objec?

an object is a container that stores property names and their values
(it can hold multiple types)

Denoted by {}
have keys and values--color (key): 'blue' (value),
seperated with a colon between the key and the value
and each key is seperated with a comma

*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true,

}
console.log(hulk);
console.log(hulk.age);
console.log(hulk.color);
console.log(typeof hulk)

//Arrays
/*
Arrays store multiple values in an ordered way. They, also, hold multiple data types

Denoted by[]
has values of ('blue', 'green', 'yellow') seperated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean tooth brush']
console.log(stepsToBrushTeeth);
//array indexing
console.log[stepsToBrushTeeth[0]];
console.log(typeof stepsToBrushTeeth);

