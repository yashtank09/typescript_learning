// simpel funtion for adding two numbers
function add(num1: number, num2: number) : number {
    return num1 + num2;
}

console.log(add(1,2))

// Function for Substraction of two numbers
// another way to write function like a lambda expression
const substraction = (num1: number, num2: number) : number => num1 - num2;

console.log(substraction(10,5));

// Function for Multiplication of two numbers
// another way to write function using return
const multiplication = function (num1: number, num2: number) : number { return num1 * num2; };

console.log(multiplication(10, 10));


// Optional parameters
function addWithOptionalParams(num1: number, num2: number, num3?: number/* optional parameter using `?` operator */) : number {
    return num3? num1 + num2 + num3 : num1 + num2; // Explain: if num3 exsist then 1 + 2 + 3 else 1 + 2
}

// required parameters
function addWithRequiredParams(num1: number, num2: number, num3 = 10/* required/optional/default parameter  */) : number {
    return num1 + num2 + num3;
}

// Rest parameters (N number of arguments)
function addNNumberArray(...numb: number[]) : number {
    return numb.reduce((a,b)=> a+b, 0);
}

let arrayNumber = [1,2,3,4,5]
console.log(addNNumberArray(...arrayNumber)); // N numbers of array
console.log(addNNumberArray(1,2,3,4,5,6,7,8,9)); // N numbers of parameters


// Generics function
function getItems<Type>(items:Type[]): Type[] {
    return new Array<Type>().concat(items);
}