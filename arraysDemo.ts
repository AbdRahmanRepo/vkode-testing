//<*************************** Arrays ******************************>
// To store multiple values in a single variable
// literal array syntax - using squre brackets []
// generic array syntax - Array<type>

let arr: string[] = [];

arr[0] = "A";
arr[1] = "B";
arr[2] = "C";

// console.log(arr);

let snames: Array<string> = ['Rasna', 'Abd', 'Rahul', 'Vijay', 'Karthik', 'gfity', 'hgvhlb', 'hugbb'];

// console.log(snames[3]);

//Iterating Over Array - Loop
// for (let i = 0; i < snames.length; i++) { //i =0, 1, 2, 3
//     console.log(snames[i]);
// }

// Array.functionCalls in-build method
// console.log(snames.indexOf('Rahul'));
snames.length;   // attributes

// for...in
// for...of
const fruits = ["apple", "banana", "orange", "Guva", "Watermelon", "Mango", "Pineapple"];

let items: (string | number | boolean)[] = [1, "apple", "banana", 19, "orange", "Guva", "Watermelon", "Mango", "Pineapple", true, false];

// for..in
for (let i in fruits) {      // Index
    // console.log(i);   // console.log(i);
}

for (let i of fruits) {      // Values
    // console.log(i);
}

// Array is dynamic in nature - can store different data types - dynamic sizing
// Tuple is static in nature - can store fixed data types and fixed length
// Tuples

// let tuple: [number, string, boolean] = [1, "Hello", true];

let tuple: [number, string, number] = [1, "Hello", 2];

let arrTuple: [number, string][] = [[1, "Hello"], [2, "World"], [3, "Good"]];


const fruit = ["apple", "banana"]; //"orange", "Guva", "Watermelon", "Mango", "Pineapple"
console.log("Original Fruit Array : " + fruit);
// Methods in Array - pre-defined methods
// 1. push() - adds element to the end of the array
console.log("**********push()**********");
fruit.push("orange"); // array.push(element)
console.log('push() example', fruit);

// 2. pop() - removes element from the end of the array and return it
console.log("**********pop()**********");
let removedFruit = fruit.pop();
console.log('Removed Value', removedFruit);
console.log(fruit);

// 3. shift() - removes element from the start of the array and return it
console.log("**********shift()**********");
let removeFruit = fruit.shift();
console.log(removeFruit);
console.log(fruit);

// 4. unshift() - adds element to the start of the array
console.log("**********unshift()**********");
fruit.unshift("Guva");
console.log(fruit);

// 5. concat()
console.log("**********concat()**********");

let arr1 = [1, 2];
let arr2 = [3, 4];
let result2 = arr1.concat(arr2);
console.log(result2);

// 6. slice() - Extract a section of an array in given range without modifying the orignal array
console.log("**********slice()**********");
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
let result3 = arr3.slice(4, 7); // excludes the last index
console.log(result3);

// 7. splice() - Add or remove elements from an array at any position
// Syntax - array.splice(startIndex, deleteCount, item1, item2, item3)
console.log("**********splice()**********");
const fruit2 = ["apple", "banana", "Guva"];
// To Remove
let removedFruit2 = fruit2.splice(0, 2)
console.log(fruit2);
console.log("Removed Fruits : " + removedFruit2);

// To Add
fruit2.splice(1, 0, "orange", "watermelon");
console.log(fruit2);


// 8. indexOf
console.log("**********indexOf()**********");
// Element present
console.log(fruit2.indexOf("watermelon"));
// Element absent
console.log(fruit2.indexOf("apple"));

// 9. Includes - returns true or false
console.log("**********includes()**********");
console.log(fruit2.includes("apple"));
console.log(fruit2.includes("watermelon"));


// For Each() - iterates over an array - Executes a function once for each array element
console.log("**********forEach()**********");
// Syntax - array.forEach(function(currentValue, index, array) {}) // lambda functions
fruits.forEach((currentValue, index) => {
    console.log(currentValue);
    console.log(index);
})

//map()
//filter()
//reduce()
//some()
//every()




// =========  forEach(), map(), filter(), reduce(), some(), every() ==============


// 1. forEach() - Executes a function once for each array element
// It Takes function as a parameter

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to.

// Ex 1: Get index of all the fruites along with value.
let fruits2: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

console.log("Printing fruits along with Index using for-in:");
for (let i in fruits) {
    console.log(i, fruits[i]);
}

console.log("Printing fruits along with Index using forEach():");

fruits.forEach(function (element, index) {
    console.log(`${index}. ${element}`);
});


/*Using arrow function

fruits.forEach((element, index) => {
    console.log(`${index} , ${element}`); //Print the values as string
    //console.log(index,element);  //Printing values directly
    }
);
*/


/*
Output:
0. apple
1. banana
2. orange
3. mango
4. kiwi
*/

// Ex 2: Print all fruite names in uppercase:
console.log("All fruits in UPPERCASE:");
fruits.forEach((element) => {
    console.log(element.toUpperCase());
});

/*Output:
APPLE
BANANA
ORANGE
MANGO
KIWI

*/
//=============================================================================


// 2. map() - Creates a new array with the result of calling the function on every element of an array
// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.

// Syntax: array.map(function(currentValue, index, array){})

// Ex1: Req: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let numbers: number[] = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map((num) => {
    return (num * num);
});

//squaredNumbers = numbers.map((num) => num * num);   //another appraoch
console.log('Original Array:', numbers);
console.log("Squared numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Ex2: Double each number  [1,2,3,4,5] --->  [2,4,6,8,10]
let doubleNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubleNumbers); // [2, 4, 6, 8, 10]

//=============================================================================


// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
// It Takes function as a parameter.
// Returns either same or fewer number of elements compared to original array.

// Syntax: array.filter(function(currentValue, index, array){})

// Ex1: Get the only even numbers from an array
//let numbers: number[] = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers); // Output: [2, 4]


// Ex2: Get the only numbers greater than 3 from an array
let filteredNumbers = numbers.filter((num) => num > 3);
console.log("Elements greater than 3:", filteredNumbers); // Output: [4, 5]


//=============================================================================


// 4. reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})

// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed

//Ex1: Get the total (sum) of all the elements in an array


/* Using Traditional loop
let total=0;
for(let i=0;i<numbers.length;i++)
{
    total=total+numbers[i];    // here is total is an accumulator for ex.
}
console.log("Sum of Array elements: "+total); //27
*/
//let numbers: number[] = [1, 2, 3, 4, 5]; - 15
let reducedResult = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // Initial value of accumulator is 0

console.log("Reduced Result (Total of an Array):", reducedResult); // Output: 15


//=============================================================================


// 5. some() - Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false

// Syntax: array.some(function(currentValue, index, array){})
//let numbers: number[] = [1, 2, 3, 4, 5]; - 15
//Ex1: 
let hasNegative = numbers.some((element) => element < 0);
console.log("every() example : Does numbers have any negative numbers?", hasNegative); // Output: false

//Ex2:
let hasPositive = numbers.some((element) => element > 0);
console.log("Does numbers have any positive numbers?", hasPositive); // Output: true


//=============================================================================


// 6. every() - Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false

// Syntax: array.every(function(currentValue, index, array){})

//Ex1: 
let allEven = numbers.every((element) => element % 2 === 0);
console.log("Are all numbers even?", allEven); // Output: false

//Ex2:
let allGreathanOne = numbers.every((element) => element > 1);
console.log("Are all Greater Than One?", allGreathanOne); // Output: false

//Ex3:
let allPositive = numbers.every(num => num > 0);
console.log("Are all numbers positive?", allPositive); // true

//</*************************** Arrays ******************************>