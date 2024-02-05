// Intro to Arrays
// A variable can store 1 value

// Array can store more than 1 value (ordered collection of items)
// reference Type

// 1. Create an Array
let fruits = ["apple", "mango", "pear"]; // Contains 3 elements
let numbers = [0, 1, 2, 33, 4212, 3445323];

// 2. Array mein kuch bhi store kr sakte hain (any DATATYPE)
let mixed = [1, 22, 33.455, "string", null, undefined, true];

// 3. Har value/element in Array has a index/position
// Index starts from 0
console.log(fruits);
console.log("Element at 0th Index: " + fruits[0]);
console.log(numbers);
console.log(mixed);

// 4. Arrays are Mutable
fruits[1] = "banana";
console.log(fruits);

// 5. Arrays are reference type and hence can be termed as "Objects"
console.log(typeof fruits);
console.log(Array.isArray(fruits));




// 6. Methods - Array push pop shift unshift
// shift unshift slower methods than push pop

// push() -> Insert Element at end of Array     END
fruits.push("strawberry");
console.log(fruits);

// pop() -> Removes Last Element      END
fruits.pop();
console.log(fruits);

// unshift -> Insert ELement at start of Array    START   Slower
fruits.unshift("Kiwi");
console.log(fruits);

// shift -> Removes the First Element from Array    START   Slower
fruits.shift();
console.log(fruits);


// 7. Primitive vs Reference Data types   --- IMPORTANT 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);

array1.push("item3");
console.log("After Pushing Element in array1");
console.log("array1", array1);
console.log("array2", array2);

// Primitive DataType gets created in STACK
// Har ko apni space allocate hogi in STACK

// Reference DataTypes get created in Heap Memory
// array1 (is pointer) stores address/reference of array created in HEAP
// array2 also now too points to same array (EK HI ARRAY HAI)

// Array1 mein change kreingein toh -> Array2 mein bhi reflect hoga 
// When printed in console - Gives same result


// 8. CLONE array, Concatenate. SPREAD operator

let array_1 = ["item1", "item2"];
let array_2 = array_1; // Both are same - Points to same array
console.log("Are both arrays same?", array_1 === array_2);

//  ************************ 1st Method
// CLONE using .slice() method -> RETURNS new array  
let arr2 = array_1.slice(0); // Extract Elements starting from Index: 0 and returns a new Array
console.log("Cloned using .slice()", arr2);

// ************************* 2nd Method
// .concat() method
// Khali Array liya aur array1 concatenate krdiya(array1 ke elements arr3 ke last mein insert hogye)
let arr3 = [].concat(array_1);
console.log("Cloned using .concat()", arr3);

// ************************* 3nd Method
// New Way Spread Operator -> 3 dots then original array
// Array1 ki values arr4 mein spread hojayegi
let arr4 = [...array_1];
console.log("Cloned using SPREAD operator [...array1]", arr4);

let arr5 = [...array_1, ...arr2, "item6", "item7"].concat(["item3", "item4", "item5"]); // Created new Array and inserted new values (concat)
console.log(arr5);



// 9. For Loop
let fruits2 = [];
for (let index = 0; index < fruits.length; index++) {
  console.log(`Fruit at Index ${index} is ${fruits[index]}`); // Template Literal used
  fruits2.push(fruits[index]);
}
console.log(fruits2);


// 10. Use const for Arrays *****
// PUSH POP UNSHIFT SHIFT can be used -- fruits still points to same Array 
// Ek baar const banakr uski values change nhi kr sakta(Value reassign nhi kr sakte)

// Array ke elements HEAP mein store hoingein
// let fruits = ["apple","banana"];  0x11
// fruits address store kr rha hai
// When we use const for Array -> fruits can't point to new array/ can't store address of any other array

const fruits3 = ["apple", "pear", "banana"]; // fruits stores address 01x23
// Array ko constant bana diya toh fruits3 later on can't point to any other array
// fruits3 = fruits  NOT POSSIBLE





// ****************** IMPORTANT -> USE CONST whenever Reference Type arrays/objects are created
// Because they will point to the original reference/address only




// 11. For of Loop, For in Loop - Iterate over Array

// For of Loop => Automatically Iterates over each Element - Element lakar dedega
// for(let variable of array) => variable stores element of the array
console.log("For of loop");
for (let fruit of fruits) {
  console.log(fruit); // fruit mein apple agya, phir banana, phir pear
}


// For in Loop => Index dega ek ek krke
for (let index in fruits) {
  console.log(`Index: ${index} & Element: ${fruits[index]}`);
}



// 12. array destructuring

const myArray = ["value1", "value2", "value3", "value4"];
// Initially when we want to extract elements from array: 
// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log(`Value of var1: ${var1}`);
// console.log(`Value of var2: ${var2}`);
// We were storing the values at 0th and 1st index of the array  *************

// SHORTCUT WAY to above thing
// Ek line mein hi kr sakte
let [var1, , ...var2] = myArray; // array ka 1st element var1 mein chala jayega, 2nd elemenet var2 mein chala jayega
console.log(`Value of var1: ${var1}`);
console.log(`Value of var2: ${var2}`);










// 13. Intro to Objects -- Reference Type

// arrays are good but not sufficient
// for real world data
// Objects store key value pairs
// objects don't have index, access values using key

// how to create objects  => Curly Brackets
const person = {
  name: "Jivesh", // Key - name, value - "Jivesh"
  age: 23,
  gender: "Men"
};
console.log(person); // Objects store key value pairs
console.log(typeof person);

// how to access data from objects
// => object.property  DOT(.) lagakr access kr sakta huin
// Key ko Property bhi kehte hain
// VALUE access kr sakte hain Property ki using KEY **************************** IMP
// Object ki name porperty, age property access krni hai
console.log(person.age);

// Objects can store array
const person2 = {
  "name": 'Sukriti',
  "age": "18",
  "hobbies": ["Reading", "Gardening", "listening music"],
  "subject name": ["Economics", "Accounts"]

}
console.log(person2);
console.log(person2.hobbies);


// 14. how to add key value pair to objects

// objectname.keyName: value;
// Key/Value pair will be added
person2.gender = "female";
console.log(person2);
person["subject name"] = ["Javascript", "CSS"];


// 15. Dot V/S Bracket Notation

// Bracket Notation - Access Value stored against key
// Keys - name, age, gender are stored in form of strings internally
// Also we can create a key with spaces - "key name" : value;
// By Default - Keys are single word, But if we want Keys to have multiple words => Declare key in from of String
// Javascript mein Key mein spaces allowed nhi hai
console.log(person2["hobbies"]);
console.log(person2["age"]);
console.log(person2["subject name"]);
console.log(person["subject name"]);

// Difference between dot and Bracket Notation
// If key is stored in a variable -> how to include it in Object
const key = "email"; // Add it in person object
person[key] = "jivsehgal@deloitte.com"; // object[key_variable] = value;
console.log(person);



// 16. Iterate Objects

// For Looping we use -> for in & Object.keys
// for in -> Iterates and gives key
console.log("Using for in Loop");
for (let key in person) {
  console.log(`Key: ${key} & its Value is ${person[key]}`);
}

console.log("Using Object.keys");

// Object.keys -> Return Array of keys
console.log(Object.keys(person));

for (let key of Object.keys(person)) {
  console.log(person[key]);
}


// 17. Computed Properties - DYNAMIC Key & Value ---------- IMPORTANT

// Dynamic values and objects in JavaScript allow changing, accessing, or creating values and object properties at runtime for flexibility and adaptability.

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// Keys & Values variables mein stored hain
// Create Object with that them
const obj = {
  objkey1: "myvalue1",
  objkey2: "myvalue2"
}

const dynamicObj = {
  [key1]: value1,
  [key2]: value2
}

console.log(dynamicObj);


// 18. Spread Operator -- ClONE

// Arrays
const array_one = [1, 2, 3];
const array_two = [4, 5, 6];

const array_new = [...array_one, ..."abcdef"];
// Elements ek ek krke spread/insert ho jayeingein
console.log(array_new);

// Objects
// Ek key/property 2 baar nhi aa sakti object mein 
// Agar ayi toh Value OVERRIDE ho jayegi
const obj_1 = {
  key1: "value1",
  key2: "value2",
  key1: "Value69"
}
console.log(obj_1);

const obj_2 = {
  key3: "value3",
  key4: "value4",
  key2: "value6969"
}

// Clone object using ...SPREAD Operator
// Insert key/value pairs of obj_2 and obj_1 in newObject
// Dusre DataType bhi spread krne hain -> "abcde" ke liye Keys - 0,1,2,3 ho jayegi and values a,b,c,d,e
const newObject = { ...obj_2, ...obj_1, key69: 69, ..."abcde" };
console.log("New Object", newObject);

const alphabetObj = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(alphabetObj);



// 19. Object Destructuring

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashnmir"
}

// bandName, famousSong are Constants (Variables)
// led zepplin & stairway to heaven store hogye respectively
// Bydefault Names are same as KEYS  ---- IMPORTANT
const { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps); // Leftover key/value pair gets stored as Object as Arrays mein array ban ata tha



// 20. Objects inside Array
// very useful in real world applications

const users = [
  { userId: 1, firstName: "Jivesh", gender: "Male" }, // Pehle User ki Info
  { userId: 2, firstName: "Sukriti", gender: "Female" }, // Dusre User ki Info
  { userId: 3, firstName: "Anil", gender: "Male" } // ....
];
console.log(users);

for (let user of users) {
  console.log(user);
}


console.log("Nested Destructuring");

// 21. Nested Destructuring
const [obj1, { firstName }, obj3] = users;
console.log(obj1);
console.log(firstName);
console.log(obj3);
