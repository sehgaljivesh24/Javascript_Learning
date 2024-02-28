// Iterables
// Sets
// Map
// Object.assign
// Optional Channing




// 1. Iterables
// Because:- 
// Jinpr hum 'for of loop' laga sakein
// string, array are iterable
const firstName = "Jivesh";
for (let char of firstName) {
  console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for (let item of items) {
  console.log(item);
}

// Object are not Iterable ----------------- IMP
const users = {
  'key1': 'value1',
  'key2': 'value2'
}
// for (let user of users) {

// }


// array like object  --- different from Iterables
// Because:-
// A) jinke pass length property hoti hai
// B) aur jinko hum index se access kr sakte hain
// example:- string

const lastName = "Sehgal";
console.log(lastName.length);
console.log(`Char at 2nd Index: ${lastName[2]}`);





// 2. Sets (Iterables)  -- IMP
// Store Data
// Sets also have its own methods
// No index-based Access
// Order is not guaranteed
// Unique Items only (no duplicates allowed)
// Can store values of any data type

const numbers = new Set([1, 2, 3, 3]); // Creates a new set & insert values 
console.log(numbers);
// console.log(numbers[2]); // No Index Based Access

const emptySet = new Set(); // Creates an empty set
emptySet.add(1);
emptySet.add(5);
emptySet.add(12);
emptySet.add(12); // Only store Unique Values
emptySet.add(items); // store values of any datatype

emptySet.add(['item1', 'item2']); // This array is created, stored in memory
emptySet.add(['item1', 'item2']); // It was also be inserted in set as When array is created using [], it is given different address in HEAP 
emptySet.add('String Value in Set');
console.log(emptySet);


// Check if an Element is present in Set or not
if (emptySet.has(12)) {
  console.log(`12 is present in Set`);
} else {
  console.log(`12 is not present in Set`);
}


// Iterating -- on Iterables (we can use For of Loop)
for (let element of emptySet) {
  console.log(element);
}


// Used when we need Unique Values -- For eg - User ids - These are unique
const ids = new Set();

// Now we need Unique Elements of this Array
const myArray = [1, 2, 4, 5, 5, 6, 5, 6, 3];

// Pass array to Set as array is Iterable
const uniqueElements = new Set(myArray); // Automatically extract unique elements of array
console.log(uniqueElements);


// console.log(uniqueElements.length); // Can't Use length property as set is Iterable


// Length of Set -- size property
console.log(emptySet.size);











// 3. Maps
// map is an Iterable

// Store data in ordered fashion -- Jis order mein daale usmein hi store hoingein

// Store data in key value pair (like objects)
// Duplicate keys are not allowed just like object

// Difference between Maps and Objects: -

// Objects can have only string and symbol as key
// Maps can use anything as key - like array, number, string


const person = new Map();

// Add key,value pair in Map - using set() method
person.set('firstName', 'Jivesh');
person.set('age', 7);
person.set(1, "one"); // The biggest difference between Object and Map is:
// Inside Object, type of key will be only String or symbol
// But in Map, key can be of any Datatype - Number , array, string
person.set([1, 2, 3], "Array");

console.log(person);

// Extract value stored in particular key - person.get('key);
console.log(person.get('firstName'));
console.log('FirstName key mein value stored is:', person.get('firstName'));


// Check if a key is present or not in Map -- using has() method
console.log(person.has(1));


// Size of Map (How many key/value pairs present)
console.log('Size of Map', person.size);


// Return array of keys present in Map - perosn.keys()
console.log(person.keys());
person.keys().forEach(function (key) {
  console.log(person.get(key), key);
});

// Iterate over Map
for (let key of person.keys()) {
  console.log(person.get(key), typeof key);
}


// Direct for of Loop  -- returns key/value pair in an Array ------------ IMPORTANT
for (let keyValuePair of person) {
  console.log(keyValuePair, Array.isArray(keyValuePair));
}

for (let [key, value] of person) {                       // Using Destructuring 
  console.log(`Key is: ${key} and Value is: ${value}`);
}



// Creating a Map and inserting key/value
const map = new Map([['key1', 'value1'], ['key2', 'value2']]);
console.log(map);

// Realisitic Example of MAP
const person1 = {
  firstName: 'Jivesh',
  id: 1
}

const person2 = {
  firstName: 'Sukriti',
  id: 2
}

// We store additional info in Map
const extraInfo = new Map();
extraInfo.set(person1, { age: 23, gender: 'male' });
extraInfo.set(person2, { age: 18, gender: 'female' });
// console.log(extraInfo);

console.log(person1.id);
console.log(extraInfo.get(person1).age); 

console.log(person2.id);
console.log(extraInfo.get(person2).age); 





// 4. Clone Object using Object.assign
const obj1 = {
  key1: 'value1',
  key2: 'value2'
}
// const obj2 = { ...obj1 };      // 1st Method
const obj2 = Object.assign(obj1); // 2nd Method
console.log(obj2);





// 5. Optional Chaining - ?.
const user = {
  firstName: 'Jivesh',
  address: { houseNumber: '1234' }
}

console.log(user?.firstName); // Agar user obj present hai - toh firstName property dedo
console.log(user?.address?.houseNumber); // Agar user obj present hai - toh address property dedo, agar address property hai toh uski houseNumber property dedo

