"use strict";
// simpel funtion for adding two numbers
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
// Function for Substraction of two numbers
// another way to write function like a lambda expression
const substraction = (num1, num2) => num1 - num2;
console.log(substraction(10, 5));
// Function for Multiplication of two numbers
// another way to write function using return
const multiplication = function (num1, num2) { return num1 * num2; };
console.log(multiplication(10, 10));
// Optional parameters
function addWithOptionalParams(num1, num2, num3 /* optional parameter using `?` operator */) {
    return num3 ? num1 + num2 + num3 : num1 + num2; // Explain: if num3 exsist then 1 + 2 + 3 else 1 + 2
}
// required parameters
function addWithRequiredParams(num1, num2, num3 = 10 /* required/optional/default parameter  */) {
    return num1 + num2 + num3;
}
// Rest parameters (N number of arguments)
function addNNumberArray(...numb) {
    return numb.reduce((a, b) => a + b, 0);
}
let arrayNumber = [1, 2, 3, 4, 5];
console.log(addNNumberArray(...arrayNumber)); // N numbers of array
console.log(addNNumberArray(1, 2, 3, 4, 5, 6, 7, 8, 9)); // N numbers of parameters
// Generics function
function getItems(items) {
    return new Array().concat(items);
}
