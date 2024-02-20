// Function declaration
// Function Expression
// Arrow Functions
// Function declarations are hoisted(covered in great detail, later in this course)
// Function inside function
// Lexical Scope
// Block Scope Vs Function Scope
// Default Parameters
// Rest Parameters
// Parameter Destructuring
// Very brief intro to callback functions(covered in great detail, later in this course)
// Functions returning Functions
console.log("Functions");


// Function ko apne naukar ki tarahin samjho -> Jaise naukar humare liye kaam krdeta hai
// FUNCTION humare liye kaam krdega

// 1. Function Declaration

// Create a Function
// functionKeyword nameOfFunction (){}
function singHappyBirthday() {
  // Idhr kaam likdo jo apne function se baar baar krvana hai
  console.log("Happy Birthday....");
}

// Call Function
// Whenever we will call Function, It will perform the work
singHappyBirthday();
singHappyBirthday();

// Ek kaam baar baar krna hai code mein, to reduce reduntant work
// Create a Function, Write the logic it in once
// Call whenever you want to do that work  -- REUSABLE


function returnSum(num1, num2) {
  // num1 & num2 are PARAMETERS - variables of the fn
  // num1 and num2 now stores 9 & 3 respectively
  return num1 + num2;
}

// Calling returnSum Function, passing Values ARGUMENTS and it returns the sum of these values
console.log(returnSum(9, 3));

// Calling fn and result returned stored in variable
let variable = returnSum(4, 1);


function sum3Numbers(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

sum3Numbers(1, 2, 3);


// odd or even
// HIGH LEVEL - Create a function that takes number as a input and tells whether a number is Odd or Even
function isOddOrEven(number) {
  return ((number % 2 === 0) ? "Number is Even" : "Number is Odd");
}

console.log(isOddOrEven(2345)); // Argument mein 9 pass krdiya


// function
// input: string
// output: First Character
function firstChar(anyString) {
  return anyString[0];
}

console.log(firstChar("Jivesh"));


// function
// input : array, target(number)
// output : Index of Target if Target is present in array
function indexOfTarget(arr, target) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArr = [1, 2, 3, 4, 5, 1232, 1223, 14334, 6];
let target = 1232;
console.log(`Index of Target ${target} is :`, indexOfTarget(myArr, target));




// 2. Function Expression
// Function ko variable mein assign krdete hain
// Jo variable ka naam hai vahi function ke Name ki tarahain treat hoga 

const sum2Number = function (num1, num2) {
  return num1 + num2;
}

console.log("Using Function Expression", sum2Number(3, 4));

const indexofTarget2 = function (arr, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index;
    }
  }
  return -1;
}

console.log(indexofTarget2(myArr, 3));



// 3. Arrows Function
// Important as used in React
// function keyword ko hata kr arrow lagado in Function Expression

function singHappyBirthday2() {
  // Function Declaration
}

const singHappyBirthday3 = function () {
  // Function Expression
}

const singHappyBirthday4 = () => {
  // Arrow Function
  console.log("Happy Birthday to Arrow Function");
}
singHappyBirthday4();

const indexOfTarget3 = (array, target) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === target) {
      return index;
    }
  }
  return -1;
}

let ans = indexOfTarget3(myArr, 4);
console.log(ans);

const isEven = (number) => {
  return number % 2 === 0;
}


// 4. Arrow Function --- Important

// If There is only 1 Paramter -> then we can remove Paranthesis ------ IMPORTANT
const isEven2 = number => {
  return number % 2 === 0;
}

// If there is only 1 line inside Curly Bracket and it is returning some value -------- IMPORTANT
// We can remove Curly Brackets & return keyword
const isEven3 = number => number % 2 === 0;

// isEven naam ka ek Function hai, jo 1 Parameter le rha hai Number and return kr rha hai number%2 === 0

let ans2 = isEven3(8);
console.log(ans2);


const firstChar2 = anyString => anyString[0];

console.log(firstChar2("Sukriti"));




// 5. Hoisting
// Function likhne se pehle bhi FUNCTION ko Call krdi -> 

hello(); // ONLY POSSIBLE in Function Declaration 

function hello() {
  console.log("Hello World");
}

hello();

// hello2(); Not Possible in Function Expression
const hello2 = function () {
  // FunctionNaam ka variable banakar fn store krvado
  console.log("Hello World 2");
}

hello2();


// hello3(); Not possible in Arrow Function
const hello3 = () => {
  console.log("Hello World 3");
}

hello3();




// 6. Function inside function
// Javascript mein Function ke andar Function bana sakte hain
// Function which are inside a function are called from inside 

const app = () => {
  const myFun = () => {
    console.log("hello from myFun");
  }

  const addTwoNumbers = (num1, num2) => num1 + num2;

  const multiplyTwoNumbers = (num1, num2) => num1 * num2;

  console.log("Inside app")
  console.log(addTwoNumbers(1, 2));
  console.log(multiplyTwoNumbers(5, 2));

}

app();


// 7. Lexical Scope
// If we comment out myVar inside myFun(), Then Javascript will look for this variable in Lexical Scope/Environment which is myApp2() Fn
function myApp2() {
  const myVar = "value1";

  function myFun() {
    // const myVar = "value69";
    console.log("Inside myFun()", myVar);
  } // function declaration

  console.log(myVar);
  myFun();
}

myApp2();




// 8. Block scope vs Function scope

// let and const are block scope
// var is function scope


// Creating Block using Curly Brackets {}
// Variable created inside BLOCK using let and const,
// can only be accessed inside the Block not outside   ---- IMPORTANT
// BLOCK ke bahar access nhi kr sakte
{
  // THIS IS A BLOCK
  let firstName = "Jivesh";
}
// console.log(firstName);

{
  // Another Block
  let firstName = "Sukriti";
  console.log(firstName);
}

// var keyword se Variable banakr kahin bhi use kr sakte ho
// variable created using var in BLOCK  - can be access inside and outside of block   ---- IMPORTANT
{
  var lastName = "Sehgal";
}
console.log(lastName);


if (true) {
  var gender = "male";
}
console.log(gender); // variable created using var - accessed outside of block




// 9. Default Parameters
// If during Function calling, no values are passed as argument to function
// Function will take default values for variables present in Parameters

function addTwo2(num1 = 5, num2 = 8) {
  return num1 + num2;
}

const answer = addTwo2(2, 3); // 2,3 passed as argument
console.log(answer);




// 10. Rest Parameters

// We want a stores 1, b stores 2, c will store rest all other value present in argument
// ... 3 DOTS
function myFun(z, b, ...c) {
  console.log(`z is ${z}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`, c); // array ki form mein store
}
myFun(1, 2, 3, 4, 5, 6, 7, 8);


function addAll(...numbers) {
  // values naam ka array ban gya that stores all arguments
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  console.log(sum);
}
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);




// 11. Parameter Destructuring

// object
// react

const person = {
  firstName: "Jivesh",
  gender: "male"
}

function printDetails(obj) {
  console.log(obj.firstName);
  console.log(obj.gender);
}

function printDetails({ firstName, gender }) {
  console.log(firstName);
  console.log(gender);
}

printDetails(person);




// 12. CallBack Function
// Function ko as a input accept kr sakte hain

// Jab hum ek Fn ko call kr rhe hain, then dusre Fn ko as a argument pass kr sakte hain
// It is called Callback Function

// Whenever we receive Function as input, Parameter is named as callback
function myFun2() {
  console.log("Inside my fun 2");
}

function myFunc(callback) { // 
  // console.log(a);
  callback(); // callback() now stores myFun2 and it can be called using it
  console.log("hello world");
}

myFunc(myFun2);



// 13. Function returning Function
function myFunc2() {
  function hello() {
    console.log("hello world");
  }

  return hello;
}

// ans4 variable stores the function -> and it becomes a function
const ans4 = myFunc2();
ans4(); // function is called





