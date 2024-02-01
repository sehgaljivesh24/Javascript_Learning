"use strict";
// 1. console.log() can print something on console
console.log("Hello World"); // double quotes
console.log('Hello World 2'); // single quotes
console.log(`Hello World 3`); // Back Ticks


// 2. Intro to Variables

// Variables can store some information
// we can use that information later
// we can change that information later

// Declare variable - 'var' Keyword
var firstName = "Jivesh"; // assign value using '='

// Use a variable
console.log(firstName); // firstName mein jo value present hai voh print ho jayegi

// change value
firstName = 'Sukriti'; // firstName ko 'Sukriti' value assign hojayegi 
console.log(firstName);


// 3. Rules for naming variables

// Convention -- start with small letter and use camelCase
// you can use only underscore _ or dollar symbol (from all special characters)
// cannot start with number -- 1value (invalid), value1 (valid) 
var value1 = 225;
console.log(value1 ** 0.5); // square root
var first_name = "Jivesh"; // snake case writing
var firstName = "Sukriti"; // camelCase writing
console.log(first_name);


// 4. 'let' Keyword 

// declare a variable with let keyword
// Suggestion -- Use let to declare variable
let lastName = "Sehgal";
console.log(firstName + " " + lastName);
// block scope vs function scope (covered later in this video)


// 5. 'const' Keyword

// declare Constants - jinmi value change nhi hoti eg:- pi = 3.14
// contant declare kr rha huin (naki variable declare kr rha huin)
const pi = 3.14;
console.log(pi);


// 6. String Indexing

// String is a combination of characters
// Har character ki koi na koi position/index hoti hai
let name = "Jivesh"

// J i v e s h
// 0 1 2 3 4 5
// name[index]
console.log(name[4]); // s
console.log(name[0]); // j

// length of string = (number of characters) --  name.length
console.log("Length of String: " + name.length);

// last index : length - 1
console.log(name[name.length - 1]);


// 7. Useful String methods
// trim() - remove spaces at start and end
// toUpperCase()
// toLowerCase()
// slice(start_index,end_index) - extract a part of string

let fName = "   Jivesh    "; // contains spaces before and after
console.log(fName.length);

// ** Strings are immutable
// fName.trim() will create a new String, does not make changes to original one
let newString = fName.trim(); // "Jivesh"
console.log(newString);
console.log(newString.length); // 6

console.log(newString.toUpperCase()); // Make all characters CAPITAL 
console.log(newString.toLowerCase()); // Make all characters SMALL

console.log(newString.slice(0, 3)); // return characters from index 0 to 2
console.log(newString.slice(2)); // returns all character from index 2 to end


// 8. typeof Operator & Data Conversion

// Data Types (primitive data types)
// string "Jivesh"
// Number 2, 4, 5.1698
// boolean
// undefined
// null
// BigInt
// Symbol
let age = 22;
let lName = "Sehgal";

// typeof -- tells data type of variable
console.log(typeof age);
console.log(typeof lName);

// convert number to String
// 22 -> "22"
let tempString = age + ""; // ADD empty string with age variable
console.log(typeof tempString);
console.log(String(tempString)); // String(variable)


// convert String to Number
let myStr = "34";
console.log(typeof myStr);
console.log(myStr - 0);
console.log(+myStr); // add + sign in front of string/variable
console.log(Number(myStr)); // Number(variable)


// 9. String Concatenation
let string1 = "Jivesh";
let string2 = "Sehgal";
let fullName = string1 + " " + string2; // 3 string saath mein judh gyi
console.log(fullName);


// 10. Template Strings
// Let's suppose we are writing a sentence and we want to use value inside a variable. We don't need to use + and then mention variables so by breaking the string
// Simply declare string using `` BACK TICKS & variable's can be used by using ${variableName}

// Variable ki value use kr sakte hain in a string
let myAge = 23;
let firName = "Jivesh";

// "my name is Jivesh and my age is 23"
let aboutMe1 = "My name is " + firName + " and my age is " + myAge;
console.log(aboutMe1);

// Template Literal
let aboutMe = `My name is ${firName} and my age is ${myAge}`;
console.log(aboutMe);


// 11. undefined, null , BigInt

// undefined -> It happens when we declare a variable and not assign any value to it
// It's type will be Undefined
let temp;
console.log(typeof temp);

// Print multiple values in console 
console.log(first_name, lastName, myStr);

// BigInt
// Javascript mein kuch limit mein hi bada number store ho sakta usually
// But agar isse bada Number store krna then - use BigInt
console.log(Number.MAX_SAFE_INTEGER);

let num = BigInt(193456798087632234567897765);
let num2 = 123434n; // add 'n' at last to make a number BigInt
console.log(num);
// Cannot perform operation b/w BigInt and Normal Numbers


// 12. Booleans & Comparison Operators
// Booleans -> true or false

// == vs ===
let num1 = "7"; // String DataType
let num3 = 7;   // number 

console.log("== Operator only compares value", num1 == num3);
console.log("=== Operator compares both DataType and Value", num1 === num3);

// != vs !===
console.log(num1 != num3);
console.log(num1 !== num3); // because dataType does not match - hence not equal


// 13. truthy and falsy values

// Falsy Values
// false, "", null, undefined, 0 -- yeh sari values false deingi
// Baki sab TRUTHY hain -> will give true when evaluated



// 14. Ternary Operator ? :
let my_age = 22;
let drink = (my_age >= 18) ? "Alcohol" : "Soft Drinks";
console.log(drink);


// 15. && || Operators
// Ek se zaada condition check krni hoti
let f_name = "Jivesh";
let m_age = 23;
if (f_name === "Jivesh" && m_age >= 22) {
  console.log("Hi Guyzzz");
}


// 16. Switch

let day = 2;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Day");
}

