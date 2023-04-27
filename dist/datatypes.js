"use strict";
// Datatypes in Typescript
// String:
let first_name = 'Yash';
first_name = 'Trisha'; // Allowed
// first_name = 10; // Not Allowed {Type 'number' is not assignable to type 'string'.}
console.log(first_name.toUpperCase());
// number:
let age = 12; // with assigning value
let mobile_number; // without assigning value
let dob = "12";
mobile_number = 6589565;
mobile_number = 54875;
let result = parseInt(dob); // type conversion  
// booleans:
let isValid;
// console.log(isValid); // value will be undefined if variable is undefined {Warning: Variable 'isValid' is used before being assigned.}
isValid = false;
console.log(isValid);
// Arrays:
let userList; // syntax 1 for declaring Array
userList = ['Yash', 'Jay', 'Gauraw'];
let departmentList; // syntax 2 for declaring Array using Generics
departmentList = [1, 2, 3, 4, 5, 6];
let array_result = departmentList.filter((departmentList) => departmentList > 4);
let user_find = userList.find((userList => userList === 'Jay'));
let sum = departmentList.reduce((acc, num) => acc + num);
console.log(array_result); // [ 5, 6 ]
console.log(user_find); // Jay
console.log(sum); // 21 
// enums
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let c = Color.GREEN;
let cc = 0 /* ColorConst.RED */;
// Tuples
let swapNumbers;
function swapping(num1, num2) {
    return [num2, num1];
}
swapNumbers = swapping(10, 30);
swapNumbers[0];
swapNumbers[1];
// any data type
let deaprtment;
let DefaultanyType; // default any type
deaprtment = "IT";
deaprtment = 1101;
