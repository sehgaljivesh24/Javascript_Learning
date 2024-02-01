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


