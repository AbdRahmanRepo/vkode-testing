// <********* Functions *****************>
//readability
//reusability
// 2 type of function 
//1. normal function
//2. parameterized function
function greet() {
    console.log("Hello World");
}

// This is city function
function city(cityName: string) {
    console.log("This is " + cityName + " city");
}

function sum(a: number, b: number) {
    console.log("First parameter is :" + a)
    console.log("second parameter is :" + b)
    console.log(a + b);
}



function sum2(a: number, b: number, c: number, message: string, isNumber: boolean, d: number) {
    console.log(message);
    console.log(a + b + c + d);
    console.log(isNumber);
}



//function call
// greet();
// city("Pune");
// sum2(1, 2, 3, "Printing the 4 parameters summed up value", true, 1);


// <********* Functions **********/>

// <*************** Comments ***************>

// Single line comments. uses (//)
// Multi line comments, uses (/* */)

// <*************** Comments ***************/>





// 7, May 2026 <**************** Operators *****************>

// 1) Arithmetic Operators
// + - Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus
// ** Exponent

// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 ** 3);


// 2) Assignment Operators
// =, +=, -=, *=, /=, %=   
let sname: string = "Rahul";

// +=
let numb: number = 25
numb -= 10; // numb = numb + 10
// console.log(numb);

// 3) Increment & DecrementOperators
// ++, --  // Loops, ForLoops
let num: number = 10;
num++;
// console.log("Incremented value : " + num);


// 4) Relational / Comparison Operators
// ==, !=, >, <, >=, <=
// let a: number = 10;
let b: number = 10;

// console.log(a != b);

// 5) Logical Operators
// &&, ||, !
let a: number = 30;

// console.log(a > 35 && a < 50); // a should be greater than 35 and less than 50
// console.log(a > 35 || a < 50); // a should be greater than 35 or less than 50
// console.log(!(a > 35 || a < 50)); // a should be greater than 35 or less than 50

// Ternary Operators
// condition ? true : false

let age: number = 15;

// console.log(age >= 18 ? "You can drive" : "You can't drive");

//conditional statements

// red , white , blue
// if (condition is true) {
//     code to be executed
// }

let color: string = "red";

// console.log("**********Input color is : " + color + " ---  Condition is : " + (color == "red"));

// if (color == "red") {
//     console.log("**********************************************************")
//     console.log("The color is : Red")
//     console.log("**********************************************************")
// }

// if(){
//     // code to be executed
// }else{
//     // code to be executed
// }

let choc: string = "dairyMilk"

// if (choc == "kitkat") {
//     console.log("Buy chocolate kitkat");
// } else {
//     console.log("Buy Any chocolate available");
// }

//if(){
//    // code to be executed
//}else if(){
//    // code to be executed
//}else{
//    // code to be executed
//}

let mark: number = 100;

if (mark == 60) {
    console.log("Average Mark");
} else if (mark == 80) {
    console.log("Good Mark");
} else if (mark == 90) {
    console.log("Exellent Mark");
} else {
    console.log("Cannot compare");
}



