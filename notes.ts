// <********* Functions *****************>
//readability
//reusability
// 2 type of function 
//1. normal function
//2. parameterized function

// function funcName() { business lo}
// Function call - funcName();

function greet() {
    console.log("Hello World");
}

// This is city function
function city(cityName: string) {
    console.log("This is " + cityName + " city");
}


function sumWith2Param(a: number, b: number): void {
    console.log("First parameter is :" + a)
    console.log("second parameter is :" + b)
    console.log(a + b);
}


function sum2(a: number, b: number, c: number, message: string, isNumber: boolean, d: number) {
    console.log(message);
    console.log(a + b + c + d);
    console.log(isNumber);
}


// Return Type function
function returnTypeFunc(a: number, b: number): number {
    return a + b;
}

let res: number = 20;
let result: number = returnTypeFunc(10, 20);

// console.log(result);


// Named Function
function add(a: number, b: number): number {
    return a + b;
}

// Anonymus Function
let sub = function (a: number, b: number): number {
    return a - b;
}
// Dynamic Typing

let names = "Abd";


// Arrow Function / Lambda function
let subLambda = (a: number, b: number): number => a - b;


// let functionName = (Parameters) : returnType => num + num;

let mult = (num1: number, num2: number): number => num1 * num2;

// console.log(mult(10, 20));

//function call
// greet();
// city("Pune");
// sum2(1, 2, 3, "Printing the 4 parameters summed up value", true, 1);

// <************************ Functions ***************************/>

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

//<*************************** conditional statements ******************************>

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

// let mark: number = 100;

// if (mark == 60) {
//     console.log("Average Mark");
// } else if (mark == 80) {
//     console.log("Good Mark");
// } else if (mark == 90) {
//     console.log("Exellent Mark");
// } else {
//     console.log("Cannot compare");
// }


// Switch Case

// switch (variable) {
//     case value1:
//         // code to be executed
//         break;
//     case value2:
//         // code to be executed
//         break;
//     default:
//         // code to be executed
//         break;
// }

// let day: number = 3;
// let dayName: string = "Tuesday";

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }



//<*************************** conditional statements ******************************>

//<*************************** Looping statements ******************************>


// While
//do-while
//For

/*  Syntax
while(condition){
    Code to be executed
} */
let i: number = 1;

// while (i <= 5) {   // 1 <= 0     - loop break
//     console.log(i);  // print 1 2 3 4 5
//     i++;            // 6
// }

// do {
//     console.log(i);  // print 1 2 3 4 5
//     i++;
// } while (i <= 5);

// For loop
// for(Initialization,condition,increment){
//     code to be executed
// }

// for (let i = 1; i <= 5; i++) {     // 1, 2, 3, 4, 5. // Scope
//     console.log(i); // print 1 2 3 4 5 
// }

// i++ - increment after the code execution 
// ++i - increment before the code execution

// Continue statements / keyword
// for (let i = 1; i <= 5; i++) {     // 1 2 3
//     if (i == 3) { // 3 == 3
//         continue;
//     }
//     console.log(i); // print 1 2 
// }

// Break statements / keyword
// for (let i = 1; i <= 5; i++) {     // 1 2 3
//     if (i == 3) { // 3 == 3
//         break;
//     }
//     console.log(i); // print 1 2 
// }


//</*************************** Looping statements ******************************>

//<*************************** String ******************************>

// string - Text value or a combination of characters
/*
1. Single Quote - String Literal ('SingleQuote')
2. Double quote - String literal ("DoubleQuote")
3. backtick (``) - String template - `When we try to use a string variable inside another sting value ${variable}`

// index in string starts with 0


'' or "" or ``(backtick)
*/

//Declartion of strings

let str1: string = 'This is a string with single quote';
let str2: string = "This is a string with double quote";
let str3: string = `This is a string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

//When to use back tick  ``

let num: number = 10;

console.log("Number is:", num);  //10   //valid
console.log("Number is: ${num}"); //not valid
console.log('Number is: ${num}'); //not valid
console.log(`Number is: ${num}`); // Number is: 10   valid



//String methods

let str: string = "Hello, TypeScript!";

//1. lenght - find the length of ta string( how many number of characters)
console.log("Length of a string: ", str.length);  //18

//2.toUpperCase() and toLowerCase()
console.log("Upper case: ", str.toUpperCase()); //HELLO, TYPESCRIPT!
console.log("Lower case: ", str.toLowerCase()); //hello, typescript!


//3. chatAt(index) and indexOf(string)

console.log("Character at 4th index:", str.charAt(4));   //0
console.log("Index of Type: ", str.indexOf("Type"));  //7


//4. substring(starting index, ending index)
// ending index is exclussive
//"Hello, TypeScript!"

console.log(str.substring(0, 5));  //Hello



//5. includes(): returns true or false ( boolean)
//string value is case sensitive

console.log(str.includes("abc"));   //false
console.log(str.includes("TypeScript"));   //true
console.log(str.includes("!"));   //true
console.log(str.includes("TYPESCRIPT"));   //fasle


//6. startsWith() and endsWith() --> returns a boolean vale( true/false)
console.log("starts with:", str.startsWith("Hello")); //true
console.log("ends with:", str.endsWith("!")); //true
console.log("ends with abc:", str.endsWith("abc")); //false

//7. replace()
//"Hello, TypeScript!"
console.log("Repalced string:", str.replace("TypeScript", "World")); //Hello, World!

//8. split() - break the string into multiple parts based on the delimeter, returns an array

//Ex1:
let words: string[] = str.split(" ")
console.log("After splitting string:", words); //[ 'Hello,', 'TypeScript!' ]

//Ex2: 
let mystring: string = "abc@gmail.com,xyzabc";

let arr = mystring.split(",");
console.log("email:", arr[0]);
console.log("password:", arr[1]);


//9. trim(), trimStart(),trimEnd()

mystring = "   welcome to typescript   ";

console.log("Original string:", mystring);  //   welcome to typescript
console.log("trim string:", mystring.trim());  //    "welcome to typescript"
console.log("trimStart string:", mystring.trimStart());  // "welcome to typescript   "
console.log("trimEnd string:", mystring.trimEnd());//"    welcome to typescript"



//10. concat()

str1 = "welcome";
str2 = "to typescript";
str3 = " and javascript";

console.log("After concatenation:", str1.concat(str2)); // welcometo typescript
console.log("After concatenation:", str1 + str2); // this is alternative but not recomended
console.log("welcome".concat("to typescript")); //welcometo typescript
console.log(str1.concat(str2).concat(str3)); //welcometo typescript and javascript


// Concept of string immutability (immutable - cannot change original))

//num=10;

let res = num + 5;
console.log(res); //15
console.log(num);;//10


str1 = "welcome";
let modifiedstring = str1.concat("to typecript");
console.log(str1); //welcome


//Multiline string with backtik ``

let multiline: string = `welcome
                      to typescript`;

console.log(multiline);

//</*************************** String ******************************>

//<*************************** Object ******************************>

//object - object contains properties and behaviour.
// object contains variables & methods
// object is collection of key and value pairs.

//Ex:

// employee --name, desig, sal, dep
//              bonus(), getemdetails(), setdetails()


//student - name, sid,grade
// getdetails(), setdetails()


// Different ways to create an oject in JS/TS //
// 1. using 'object' type - Directly define the values for variable (JS/TS)
// 2. Inline Type Object - We also define the datatype of the keys (TS)
// 3. Using type aliases (TS)
// 4. Using the classes (JS ES16/TS)



// 1. using 'object' type - Directly define the values for variable
// The TypeScript 'object' type represents all values that are not in primitive types.

/*
let employee:object ={ 
    name:"John", 
    age:30, 
    salary:50000, 
    job:"Engineer" 
}
    */

let employee = {
    name: "John",
    salary: 50000,
    job: "Engineer",
    getDetails: function (): string {
        //console.log(this.name,this.salary,this.job);
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
}


console.log(typeof employee); //object

//accessing object - appraoch 1 ( using dot notation)
console.log(employee.name, employee.salary, employee.job); //John 50000 Engineer
console.log(employee.getDetails()); //John is a Engineer earning 50000


//accessing object - appraoch2 (using braket notation)
console.log(employee["name"], employee["salary"], employee["job"]); //John 50000 Engineer
console.log(employee["getDetails"]()); //John is a Engineer earning 50000

//Modify the value
employee.job = "Manager";   //employee["job"]="Manager";
console.log("Modified job is:", employee.job); // Manager

//==============================================================================================================

// 2. Inline Type Object - We also define the datatype of the keys (TS)

let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} =
{
    name: "Scott",
    age: 15,
    grade: "A",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}

console.log(student.getSummary()); //Scott is 15 years old and scored grade A


// Problem with Inline Type object: Need to repeat structure for every object

let student1: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} =
{
    name: "Marry",
    age: 16,
    grade: "B",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};
console.log(student1.getSummary()); // Marry is 16 years old and scored grade B

//=======================================================================

// 3. Using 'type' aliases (TS): allows creating a new name for an existing type

//Example 1:

type Product = {
    name: string,
    price: number,
    getInfo: () => string
};


let book1: Product =
{
    name: "Learn java",
    price: 300,
    getInfo: function () {
        return `${this.name} costs ${this.price}`;
    }
}

let book2: Product =
{
    name: "Learn Python",
    price: 500,
    getInfo: function () {
        return `${this.name} costs ${this.price}`;
    }
}

let book3: Product =
{
    name: "Learn JS",
    price: 600,
    getInfo: function () {
        return `${this.name} costs ${this.price}`;
    }
}

console.log(book1.getInfo()); //Learn java costs 300
console.log(book2.getInfo()); //Learn Python costs 500
console.log(book3.getInfo()); //Learn JS costs 600


// Example 2: Intersection Types

type Personal = {
    name: string,
    age: number
};
type Contact = {
    email: string,
    phone: number
}

type Candidate = Personal & Contact &
{
    getContactInfo: () => string;
}

let cand: Candidate = {
    name: "Scott",
    age: 25,
    email: "abc@gmail.com",
    phone: 1234567890,
    getContactInfo: function () {

        return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
    }
}

console.log(cand.getContactInfo()); //Scott can be contacted at abc@gmail.com or 1234567890





// ==================================================
// 4. Using the classes (JS ES16/TS)

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {

        return `${this.firstName} ${this.lastName}`;
    }

    getDetails(): string {
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
    }

}

//object creation
let person1 = new Person('1121233333', 'John', 'Kenedy');
console.log(person1.getDetails());


let person2 = new Person('22222222', 'David', 'D');
console.log(person2.getDetails());

let person3 = new Person('5555555', 'Scott', 'S');
console.log(person3.getDetails());

//</*************************** Object ******************************>