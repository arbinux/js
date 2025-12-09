let score = "99abc"; //undefined is written then also output of console.log(valueInNumber);is NaN

console.log(typeof score); // string
console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number

console.log(valueInNumber); //NaN not a number

let score1 = null;
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1); // 0

// ****notes****
// "99" => 99
// "99abc" => NaN
// true => 1

let isloggedIn = 1; //note if this is empty then false print and if anything is written like "abc" then true Pass is print

let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// "" =>false
// "abc" => true Pass

let someNumber = 99;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); //string

// Operations

let value = 3;
let negValue = -value;
console.log(negValue);

// ==============================
// 1️⃣ Arithmetic Operations
// ==============================
let a = 10;
let b = 3;
console.log("Arithmetic Operations:");
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.3333
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000
console.log("");

// ==============================
// 2️⃣ Assignment Operations
// ==============================
let x = 5;
console.log("Assignment Operations:");
x += 3; // x = 8
console.log("x += 3 ->", x);
x -= 2; // x = 6
console.log("x -= 2 ->", x);
x *= 4; // x = 24
console.log("x *= 4 ->", x);
x /= 3; // x = 8
console.log("x /= 3 ->", x);
console.log("");

// ==============================
// 3️⃣ Comparison Operations
// ==============================
console.log("Comparison Operations:");
console.log("a == b ->", a == b); // false
console.log("a != b ->", a != b); // true
console.log("a > b ->", a > b); // true
console.log("a < b ->", a < b); // false
console.log("a >= 10 ->", a >= 10); // true
console.log("a <= 5 ->", a <= 5); // false
console.log("a === '10' ->", a === "10"); // false (type matters)
console.log("");

// ==============================
// 4️⃣ Logical Operations
// ==============================
console.log("Logical Operations:");
let c = true;
let d = false;
console.log("c && d ->", c && d); // false
console.log("c || d ->", c || d); // true
console.log("!c ->", !c); // false
console.log("");

// ==============================
// 5️⃣ Increment & Decrement
// ==============================
console.log("Increment & Decrement:");
let e = 5;
console.log("e =", e);
e++;
console.log("e++ ->", e);
e--;
console.log("e-- ->", e);
console.log("");

// ==============================
// 6️⃣ String Operations
// ==============================
console.log("String Operations:");
let str1 = "Hello";
let str2 = "World";
console.log("Concatenation:", str1 + " " + str2); // Hello World
console.log("Length of str1:", str1.length); // 5
console.log("Uppercase:", str1.toUpperCase()); // HELLO
console.log("Lowercase:", str2.toLowerCase()); // world
console.log("Includes 'lo':", str1.includes("lo")); // true
console.log("");

// ==============================
// 7️⃣ Array Operations
// ==============================
console.log("Array Operations:");
let arr = [1, 2, 3, 4];
console.log("Original array:", arr);
arr.push(5); // add to end
console.log("After push(5):", arr);
arr.pop(); // remove last
console.log("After pop():", arr);
arr.shift(); // remove first
console.log("After shift():", arr);
arr.unshift(0); // add at start
console.log("After unshift(0):", arr);
console.log("Array length:", arr.length);
console.log("Includes 3?", arr.includes(3));
console.log("");

// ==============================
// 8️⃣ Object Operations
// ==============================
console.log("Object Operations:");
let person = {
  name: "Arbind",
  age: 23,
  city: "Delhi",
};
console.log("Person object:", person);
console.log("Access name:", person.name);
person.age = 24; // update value
console.log("Updated age:", person.age);
person.country = "India"; // add property
console.log("Added country:", person);
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("");

// ==============================
// 9️⃣ Ternary Operator
// ==============================
console.log("Ternary Operator:");
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);
console.log("");

//note
console.log("1" + 2)      //12
console.log(1 + "2" )     //12
console.log("1" + 2 + 2)  //122  
console.log(1 + 2 + "2")  //32 
console.log(+true) //1 but true+ is error ,+true is ok but don't complicate it
console.log(+"")//  "" → unary + converts it to number → 0


//Postfix and Prefix increament
let i = 10;

console.log(i++); // prints 10, then i becomes 11
console.log(++i); // increments i to 12, then prints 12

console.log(i);   // final value of i is 12

// Prefix (++x) → “increment first, then use” 
// Postfix (x++) → “use first, then increment”