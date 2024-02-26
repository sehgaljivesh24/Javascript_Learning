// important Array Methods
// forEach method
// Map method
// Filter
// Reduce
// Sort

// Find
// Every
// Some
// Fill method
// Splice method

// Jab Fn ko call krte hai and values pass krte hain --- Use Argument kehte hain
// Jab Fn define krte and values receive krte hain  --- Usse Parameter kehte hain


const numbers = [2, 4, 6, 8];

function myFunc(number, index) {
  console.log(`index is ${index}, number is ${number}`);
  // console.log(`${number}*2 = ${number * 2}`);
}

// for (let index = 0; index <= numbers.length - 1; index++) {
//   myFun(numbers[index], index);
// }



// 1. forEach Method
// It will call the callback Fn once for each element in the array
// Callback fn contains 3 arguments - number,index and array(optional)

// Loop ki tarahin hi kaam karega
// forEach element - myFun mein likha kaam krega
numbers.forEach(myFunc);

numbers.forEach(function (number, index) { // This is anonymous function(jinka naam nhi hota)
  console.log(`index is: ${index}, number is: ${number}`);
});
// forEach element in array - callback fn ko call krdega and khudse pass krdega the element & its index


numbers.forEach(function (number) { // index parameter marzi hai
  console.log(number * 2);
});


const users = [
  { firstName: "Jivesh", age: "23" },
  { firstName: "Sukriti", age: "18" },
  { firstName: "Atul", age: "23" },
  { firstName: "Japish", age: "26" }
];

// users.forEach(function (user) {
//   console.log(`firstName is: ${user.firstName} and age is: ${user.age}`);
// });

users.forEach(function ({ firstName, age }) {
  console.log(`firstName is: ${firstName} and age is: ${age}`);
});
// yahi callback fn har element ke liye call krdega


// Using Arrow Function
users.forEach((user, index) => {
  console.log(`firstName is: ${user.firstName}, index is: ${index}`);
});




// 2. map method
// Always creates a new array
// Take callback fn as argument
// IMP - Callback Fn should always return something
// Used when we need to perform some operation on each element of the array and want to store it

const nums = [1, 2, 3, 4, 5];

const square = function (number) {
  // SHOULD ALWAYS return something - because map() method - CREATES an array
  return number * number;
}

// calls callback fn for each element in array and passes the element in callback

const squareNumber = nums.map(square); // RETURNS array
console.log(squareNumber);


// const cubeNumber = nums.map(function (number) { // returns array
//   return number * number * number;
// });
const cubeNumber = nums.map((number, index) => { // returns array
  return number * number * number;
});
console.log(cubeNumber);


// Users array hai, Humein unke firstName ka array banana hai
const userNames = users.map((user) => {
  // Array ek har Object ke liye callbackfn ko call krega - object pass krega - callback fn returns firstName present in each object
  return user.firstName;
});
console.log(userNames);





// 3. filter method
// Humein saare odd numbers filter krne hain
// Humein saare even numbers filter krne hain

// IMP - filter ka CallbackFn should always return boolean values
// if CallbackFn returns true - element would be included in array created by filter method
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);






// 4. reduce method
// CallbackFn is passed as argument
// Value returned by CallbackFn is the accumulated result and is provided as argument in the next call to the callback Fn

// Reduce kya kr rha hai - array mein se saari values ko sum krke - sum de rha hai (ek value)

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// aim: sum of all the numbers in array

const sum = numbers2.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}`);
  return accumulator + currentValue;
}, /*We can pass Initial Value of Accumulator*/ 0);

console.log(sum);


// REAL LIFE EXAMPLE
// There is a User, he has 3 items in his shopping cart at Amazon
// We need total value(sum of price of all objects) of his Cart
const userCart = [
  { productId: 1, productName: 'mobile', price: 15000 },
  { productId: 2, productName: 'laptop', price: 22000 },
  { productId: 3, productName: 'tv', price: 45000 }
];

// Price ko total krna hai
// Accumulator(totalPrice ki initial value will be set to 0)
const totalValue = userCart.reduce((totalPrice, currentProduct) => {
  console.log(`TotalValue: ${totalPrice}, CurrentPrice: ${currentProduct.price} `)
  return totalPrice + currentProduct.price;
}, 0);

console.log(`Cart Value: ${totalValue}`);





// 5. sort method
// Original Array ko change krdeta hai - Naya array nhi return krta

//  33, 12345, 1, 89, 746
// 1, 33, 89, 746, 12345 (expected)

const nums2 = [33, 12345, 5, 89, 746];
// String     - ["33", "12345", "5", "89", "746"]
// ASCII Code - [51, 49, 53, 56, 55 ]
nums2.sort();
// Javascript number ko number ki tarahain sort nhi krega
// Voh inhein string mein change krke, string ko sort krta hai
// string ko sort krne ke liye - we use ASCII code

// String ki first Character ka ascii code dekhlegi - Unke according sort kregi

// ASCII Code
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
console.log(nums2);


const userNames2 = ["Jivesh", "Sukriti", "Anil", "Ponu"];

userNames2.sort();
console.log(userNames2);



const numbers3 = [33, 12345, 5, 89, 746];

// sort method takes callbackfn as optional argument
numbers3.sort((a, b) => {
  return a - b;
});

console.log(numbers3);


// REAL LIFE EXAMPLE
// We sort Products at Amazon using=> PRICE  lowToHigh HighToLow
// It uses sort method of Javascript

// List of Objects, 1 Object represent 1 Item/Product
const products = [
  { productId: 1, productName: 'laptop', price: 71000 },
  { productId: 2, productName: 'mobile', price: 15000 },
  { productId: 3, productName: 'tv', price: 45000 }
];

// EK time pr koi 2 Objects ko compare krega
// Compare kreingein on the basis of price
// if product1.price - product2.price > 0 => then product2 comes before product1
// if product1.price - product2.price < 0 => then product1 comes before product2

// lowToHigh
products.sort((product1, product2) => {
  return product1.price - product2.price;
});

console.log(products);


// highToLow
// lowToHigh
products.sort((product1, product2) => {
  return product2.price - product1.price;
});
console.log(products);






// 6. find method -- returns element
// Takes a fn as argument and if for an element - true is returned, will stop executing for the next elements in array
// Checks for only first occurence

// Returns - element that satisfies condition

// let isLength3 = (string) => {
//   return string.length === 3;
// }
const myArray = ['Hello', 'cat', 'dog', 'lion'];

console.log(myArray.find((string) => {
  return string.length === 3;
})); // Answer: cat -> because it is first occurence that satisfies the condition that a string has length = 3


// Real life example
const users3 = [
  { userId: 1, userName: 'Jivesh' },
  { userId: 2, userName: 'Sukriti' },
  { userId: 3, userName: 'Anil' },
  { userId: 4, userName: 'Ponu' },
  { userId: 5, userName: 'Rose' }
];

// We need user whose user id is 4, The first User with userId as 4 will be returned
const user = users3.find((userObj) => {
  return userObj.userId === 4;
});

console.log(user);




// 6. Every Method -- return true/false
const numbers4 = [2, 4, 6, 8];

// Mughe Check krna hai ki iss Array mein, jitne bhi saare ke saare element hain kya voh even hai

// Callback fn either returns - true/false (boolean)
// every method returns - true/false (boolean)

// Every method - true tabhi dega jab callbackFn ki Condition - Har element ke liye true return kr rhi hogi

// Agar callback fn ne false return krdiya, Every Fn will stop executing and will return false
// Agar end element tak CallbackFn - true return krta rha, then every fn returns true

// Har element ke liye satisfy hona chaiye

const ans = numbers4.every(function (number) {
  return number % 2 === 0;
});

console.log(ans);


// Realistic Example
const products2 = [
  { productId: 1, productName: 'laptop', price: 71000 },
  { productId: 2, productName: 'mobile', price: 15000 },
  { productId: 3, productName: 'tv', price: 45000 }
];

// Check if each product's price is less than 30000 ( < 30000 )

// function priceLessThan30000(product) { // Callback Fn
//   return (product.price < 30000);
// }

let ans3 = products2.every((product) => {
  return product.price < 30000;
});

// Pehle 1st product ke liye fn call hoga - It will check price < 30000, If yes then return true
// Then for 2nd, then for 3rd
// If For all Products returned true -> Then every method returns true
console.log(`Does all products price < 30000 : ${ans}`);







// 7. Some method  -- return true/false
const numbers5 = [3, 5, 6, 8, 9];

// Kya ek bhi number esa hai jo even hai

let ans5 = numbers.some((number) => {
  return number % 2 === 0;
});
console.log(ans5);

// Realistic Example
const products3 = [
  { productId: 1, productName: 'laptop', price: 71000 },
  { productId: 2, productName: 'mobile', price: 15000 },
  { productId: 3, productName: 'tv', price: 45000 },
  { productId: 4, productName: 'macbook', price: 250000 }
];

// Koi esa Product ha jiska price 100000 se zaada ho

let ans6 = products3.some((product) => {
  return product.price > 100000;
});
console.log(`is there any Product Price > 100000 : ${ans6}`);






// 8. Fill Mehtod
// value, start, end

// Create array and fill it with -1 with length - 10

const myArray2 = new Array(10).fill(-1);
console.log(myArray2);

const myArray3 = [1, 2, 3, 4, 5, 6, 7, 8];
myArray3.fill(0, 2, 5);
console.log(myArray3);




// 9. Splice method -- Original Array mein change krega
// Array ke beeech mein se kuch delete krna hai ya insert krna hai
const myArray4 = ['item1', 'item2', 'item3', 'item4'];

// Delete
myArray4.splice(1, 2);
console.log(myArray4);

// insert
myArray4.splice(1, 0, 'inserted item');
console.log(myArray4);
