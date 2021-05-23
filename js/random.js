'use strict';

//
// var numberToStopAt = 50;
//
//
// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     } else {
//         if (i === numberToStopAt) {
//             console.log('We have reached the stopping point: break!');
//             // use the break keyword to exit from the while loop
//             break;
//         }
//         console.log('Here is a lovely even number: ' + i);
//     }
// }
//
//
// var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// for (var i = 0; i < shapes.length; i++) {
//     console.log('The shape at index ' + i + ' is: ' + shapes[i]);
// }
//
// // loop through the array and log the values
// shapes.forEach(function(shape) {
//     console.log('Here is a lovely shape: ' + shape + '.');
// });
//
//
//
// var todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];
//
// console.log('My todo list:');
// console.log(todoList);
// // ['Take out the trash', 'Clean the car', 'Pay the bills']
//
// console.log('Completing the last item: ' + todoList[todoList.length - 1]);
//
// // let's remove the last item
// var removedItem = todoList.pop();
//
// // log what we did
// console.log('Task complete: ' + removedItem);
//
// console.log(todoList);
// // ['Take out the trash', 'Clean the car']
//
// console.log('Completing the first item: ' + todoList[0]);
//
// // let's remove the first item
// var doneItem = todoList.shift();
//
// // log what we did
// console.log('Task complete: ' + doneItem);
//
// console.log(todoList);
// // ['Clean the car']
//
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
//
// var index = colors.indexOf('green');
// console.log(index);
// // 3
//
// index = colors.indexOf('red');
// console.log(index);
// // 0
//
// index = colors.lastIndexOf('red');
// console.log(index);
// // 7
//
// index = colors.lastIndexOf('red');
// console.log(index);
//
//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var slice = colors.slice(2, 4);
//
// console.log(colors); // colors is unchanged
// // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
//
// console.log(slice); // ['yellow', 'green']
//
// slice = colors.slice(3);
// console.log(slice); // ['green', 'blue', 'indigo', 'violet']
//
// var namesString = "Joe,Bob,Sally";
//
// console.log(namesString);
// // Joe,Bob,Sally
//
// var namesArray = namesString.split(',');
//
// console.log(namesArray);
//
// namesArray.unshift("Irvin");
//
// console.log(namesArray);
//
// var newNamesString = namesArray.join(",");
//
// console.log(newNamesString)
//
// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
// cars.forEach(function(car) {
//     car.features.forEach(function(feature) {
//         console.log(feature);
//     });
// });

const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);


    document.getElementById("demo").innerHTML =
    "The title of this document is: " + document.title;


function getElements() {
    var x = document.getElementsByName("x");
    document.getElementById("demo").innerHTML = x.length;
}
<