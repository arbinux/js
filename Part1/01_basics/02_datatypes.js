"use strict"//treat all JS code as new version

// alert(3+3) // we are using node js , not browser

/*
note : alert() only works in the browser

alert("Hello") is part of the Browser JavaScript API (Window object).

VS Code is not a browser, so:

alert() ❌ does NOT work in VS Code terminal

alert() ❌ does NOT work in Node.js

alert() ✔️ ONLY works in Chrome, Firefox, Edge, etc.

That’s why when you type alert() in VS Code 
*/

console.log(3
    +
    3) //this works as we should have  code readability high 

// note use some ideas from mdn web docs and TC39 = Technical Committee 39
// It is part of ECMA International, the organization that standardizes programming languages.

/*
✅ JavaScript Data Types

JavaScript has two categories of data types:

🟩 1. Primitive Data Types

Primitive = simple, immutable, stored by value (not by reference).

✔ List of Primitive Types:

Number 
String 
Boolean 
Null 
Undefined 
BigInt 
Symbol

✔ Example:
let a = 10;          // Number
let b = "Hello";     // String
let c = true;        // Boolean
let d = null;        // Null
let e = undefined;   // Undefined
let f = 123n;        // BigInt
let g = Symbol("id");// Symbol

✔ Important:

Primitive values cannot be changed (immutable).

If you assign a primitive to another variable, a copy is created.

let x = 5;
let y = x;
y = 10;

console.log(x); // 5  (unchanged)

🟦 2. Non-Primitive (Reference) Data Types

Non-primitive = complex, mutable, stored by reference.

✔ List:

Object 
Array 
Function 
Date 
Map 
Set 
etc. (all are objects)

✔ Example:
let obj = {name: "Arbind", age: 20};
let arr = [1, 2, 3];
let fun = function() { console.log("Hello"); };

✔ Important:

Non-primitive values can be changed (mutable).

When assigning, reference is copied (not the data).

let obj1 = {a: 1};
let obj2 = obj1;

obj2.a = 50;

console.log(obj1.a); // 50  (same memory reference)

🔥 Key Differences: Primitive vs Reference
Feature	     Primitive	                     Non-Primitive
Storage	     Stored by value	             Stored by reference
Mutable?	❌ Immutable	                   ✔ Mutable
Memory	    Stored in stack	                Stored in heap
Examples	number, string, boolean, null	objects, arrays, functions
Assignment	Copy of value	                Copy of reference

🎯 Quick Remember Trick 
Primitive → “single simple value”
Non-Primitive → “collections / objects”
*/


// additional information 
let name= "abs" // string
let age = 18 //integer
let isloggedIn =true //boolean
let state; 

//  number => 2 to power 53
//  bigint 
//  String = " "
//  boolean = true
//  null ->datatype and also it is stand-alone value 
//  undefined =>not given any value just declare like let sate;
//  symbol=>unique

//object 
console.log(typeof "abs") //string
console.log(typeof null ) //object
console.log(typeof undefined) //undefined



