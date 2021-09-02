/*
Arrow Functions
*/


//normal function declaration for named functions
function coffee() {
    console.log('coffe is good')
}

let tea = function () {
    return 'tea is healthy'
}

console.log(coffee());
console.log(tea());

//arrow functions are always anonoymous
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king';
}
console.log(hotChocolate())

let animals = (kittens, puppies) => { `return ${kittens} cats and ${puppies} dogs` };
console.log(animals(3, 2))

//concise vs. block body
//concise body
let apples = x => `There are ${x} apples`
console.log(apples(10));

//block body
let bananas = (x) => {
    return `There are ${x} bananas`;
}
console.log(bananas(5));

// return must be explicitly written in a block body or function

let func = () => 'hi';
//arrow needs to follow directly after parentheses
