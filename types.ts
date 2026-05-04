
// Variables.... Types


// let typeName : Type = value

//Primitive Types

// number
let a: number = 10;

//String
let b: string = "Rahul";
let b1: string = 'Abd';

// boolean
let c: boolean = true;

// null
let d: null = null;

// undefined
let storeName: undefined = undefined;

// a = "Rahul";

//Special Types
// any
let dynamicValue: any = true;

// unknown
let anyValue: unknown = true;


dynamicValue = 'String';

dynamicValue = 10;

anyValue = 'String';

//Object Type
let person: object = {
    name: "Rahul",
    age: 30,
    isMarried: true,
    company: "Google",
}

//Array types

let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Rahul", "Abd", "Rasna", "Karthi", "Farish"];

let mixedArray: (number | string)[] = [1, "Rahul", "Abd", 3, "Rasna", 4, "Karthi", 5, "Farish", 2, 1, 3, "ahndidm"];

// let vname : number and string => (number | string) []

//Tuple types

let tuple: [number, string, boolean] = [1, "Rahul", true];

//functions