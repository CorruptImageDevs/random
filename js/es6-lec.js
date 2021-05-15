"use-strict";

//exponent
// var oldWay = Math.pow(4,2);
// console.log(oldWay);
//
// var newWay = 4 ** 3;
// console.log(newWay);

// === var vs let vs const ====
// Variables declared with var are function-scoped. This means that if a variable is declared anywhere else besides a function using var, it will always exist in the global scope.

// ex:

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// if (i === "Hello!") {
//     var bubbles = 'bubububububbubbbles';
//     console.log(bubbles);
// }
// bubbles = 'pop'
// console.log(bubbles);
//
// function test() {
//     var logMe = 'Hello!';
//         bubbles = '*floating*';
//         return logMe;
// }

// console.log(test());
// console.log(logMe);


// ----------------------

//CONST
// CONST is block-scoped. This means that the variable declared with const cannot be redeclared, or reassigned.

// const num = 4;
// console.log(num);
// num = 6;
// console.log(num)
//
// const name = "jay";
// const name = 'david';
// console.log(name);
// nothing shows up, neither jay or david

// var name = 'jay';
// var name = 'david';
// console.log(name);
//second var gets overwritten and console returns david


// ------------------------

// Block-scope
// var number = 5;
//
// if (number === 5) {
//     const cardNumber = 123412341234
//     console.log(cardNumber)
//     //works
// }
// console.log(cardNumber)
// doesnt work outside of braces

// ------------------------

// LET
// The let keyword lets you define variables that are block-scoped. As with variables declared with const. the variables with let cannot beredeclared.


// re-declared
// let name  = 'jay';
// let name = 'david';
// console.log(name);
// error identifier name has already been declared


// re-assign
// let name  = 'jay';
//  name = 'david';
// console.log(name);
//returns david

// ex.

// function foo(n) {
//     if (n === 6) {
//         let num = 2
//     }
//     console.log(num)
// }
//
// foo(6);
// returns error because our let variable is within our if statement scope.

// ex. 2

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log("i outside of the loop", i);
// doesnt log because within the for loop

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log("i outside of the loop", i);
// this will log because it is within the block scope where i is declared.

// ======== TEMPLATE STRINGS =====

// Template strings allow for interporlation in strings. Variables and expressions can be read in template strings. Template strings use back ticks to recognize variables and expressions.

// let name = 'jay';
//  console.log(`My name is ${name}`);
//
//  console.log(`My name is ${name.toUppercase() + ' arredondo'} in all caps!`);

 let nationalParks = ['a', 'b', 'c', 'd'];

 let parksList = `<ul>
<li>${nationalParks[0]}</li>
<li>${nationalParks[1]}</li>
<li>${nationalParks[2]}</li>
</ul>`

document.write(parksList);


 // ======== for ...of loop =======

// regular   for loop
for (let i = 0; i < nationalParks.length; i++) {
    console.log(nationalParks[i]);
}

// forEach loop
nationalParks.forEach(function(park, index) {
    console.log(park)
});

// NEW ES6 for... of loop
// Structure
// for(variable of iterable/collection) {
//     statement
// }
// each national park gets named park
// for(let park of nationalParks) {
//     console.log(park);
// }

// let listItems = document.getElementsByTagName('li');
// console.log(listItems)
//
// //can use const or let!
// for(const listItem of listItems) {
//     listItem.innerHTML += ` is an awesome park!`;
// }

// ====== ARROW FUNCTIONS ======

// basic/ original
// function test(){
//     return 'hello from the test function!'
// }
// console.log(test());
//
// //arrow function
//
// var test2 = function() {
//     return 'Hello from test2 function!'
// }
// console.log(test2());
//
// //es6 way
//
// const test3 = () => 'Hello from test3 function!'
//
// console.log(test3());
//
// const sayHello = (x) => {
//     var nameInCaps =  x.toUpperCase();
//     return nameInCaps;
// }
//
// console.log(sayHello('Irvin Buendia'))

//using an anonymous function expression
// nationalParks.forEach(park => {
//     let capsParks = park.toUpperCase();
//     console.log(capsParks);
// })



