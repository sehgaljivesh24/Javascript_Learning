// Object Oriented Javascript / Prototypal Inheritance
/*
Methods
This keyword, Window object
Call, apply and bind method
Some warnings
This inside arrow functions
Short syntax for methods
Factory functions & discuss some memory related problems
First solution to that problem
Why that solution isn’t that great
What is __proto__, [[prototype]]
What is prototype
Use prototype
New keyword
Constructor function with new keyword
More discussion about proto and prototype
Class keyword
Example using class keyword
Super keyword
Method overriding
Getters and setters
Static methods and properties
*/


// 1. Methods  (function inside Object)
// property containing a Function definition, to perform actions on an object

const person = {
  firstName: 'Jivesh',
  age: 23,
  aboutMe: function () {
    // functio ke andar proper ko access krne ke liye this keyword use krna padega
    console.log(`Person name is: ${this.firstName} & age is: ${this.age}`);
  }
}
person.aboutMe();



// 2. this keyword - this ko use krke object ki property ko access kr sakte in method
// this keyword ki value tab nhi pta lagti jab hum code likhte hain - Tab pta lagti hai jab code run ho rha hota hai
// this - stores reference of current object
// this.firstName -> person ki firstName property (jis object ne call kiya hai)
const personalInfo = function () {
  console.log(`Person name is: ${this.firstName} & age is: ${this.age}`);
}

const person1 = {
  firstName: 'Jivesh',
  age: 23,
  aboutMe: personalInfo // aboutMe property ki value set krdi humne function
}
const person2 = {
  firstName: 'Sukriti',
  age: 18,
  aboutMe: personalInfo
}
const person3 = {
  firstName: 'Ponu',
  age: 8,
  aboutMe: personalInfo
}

person2.aboutMe();
person3.aboutMe(); // person3 obj calls aboutMe() method






// 3. Window Object
// It is Javascript's Global Object
console.log(this); // contains window Object
console.log(window);
console.log(this === window);

function myFunc() {
  console.log("hello world");
}
myFunc(); // myFunc() gets added in window object
window.myFunc();





// 4. call, apply & bind method
// .call() -> Calls a method of an object & Sets this with object passed in argument
// and if any other arguments are passed to the call method -> They are passed as an argument to the function



function hello() {
  console.log("hello world");
}

// We can call any function - using .call() method
hello.call();

const user1 = {
  firstName: 'Jivesh',
  age: 23,
  about: function (hobby, favMusician) {
    console.log(this.firstName, this.age, hobby);
  }
}

const user2 = {
  firstName: 'Sukriti',
  age: 18,
  // We want to call about function present in user1 for user2
  // user2 doesn't have about fn
  // Borrow about fn - from user1 obj
}
user1.about(); // user1

// call() method - calls about method of user1 obj and Sets value of this with user2 obj
user1.about.call(user2, "Gardening");

// If nothing is passed as an argument in call() method - value of 'this' will be 'undefined'
user1.about.call();


// Created a function
function aboutMe(hobby, petName) {
  console.log(this.firstName, this.age, hobby, petName);
}

aboutMe.call(user2, "Studying", "Ponu"); // Function can be called for any object





// apply() method - almost same to call() and internally about calls call() method
// Calls the function, substituting the specified object for the this value of function,
// and specified array for the arguments of the function

aboutMe.apply(user1, ["Books Reading", "Ponu"]);




// Bind Method
// For a given function, creates a bound function which has the same body as the original function. The this object of the bound function is associated with the specified object and has the specified initial parameters
// Returns the function and gets stored in variable
const func = aboutMe.bind(user1, "guitar", "Ponu");
func(); // Now we can call this for user1 obj







// 5. Don't do this mistake
const user3 = {
  firstName: 'Jivesh',
  age: 23,
  about: function () {
    console.log(this.firstName, this.age);
  }
}

const myFunc2 = user3.about; // Function ko store krva liya
myFunc2(); // undefined will be printed for both - because this does not have any reference at time of function call
// we are not associating value of this with any object - hence cant access the property

// Instead
const myFunc3 = user3.about.bind(user3);
myFunc3();





// 6. This inside arrow functions
// There behaviour is different from other functions
// IMP - Arrow fn ka 'this' nhi hota , 'this' surrounding se leta hai (Window Object)
// 'this' can't be changed using call() method
const user4 = {
  firstName: "Ponu",
  age: 8,
  about: () => {
    console.log(this);
    console.log(this.firstName, this.age);
  }
}
user4.about();
user4.about.call(); // 'this' can't be changed using call() method







// 7. short syntax for methods
const user5 = {
  firstName: 'Sukriti',
  age: 18,
  about() {
    console.log(this.firstName, this.age);
  }
}

user5.about();






// 8. Factory functions & discuss some memory related problems
//Creating User using a Function
const user6 = {
  firstName: "Jivesh",
  lastName: 'Sehgal',
  email: 'sehgaljivesh24@gmail.com',
  age: 23,
  address: 'HouseNumber, Colony, Pincode, State',
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  }
}

console.log(user6.about());
console.log(user6.is18());

// Mughe aise lakhoin crore user chaiye - hum baar baar manually toh object banayeingein nhi

// Create a function - takes firstName, lastName, email, age as input & return object
// function (that function create object)
// 2. add key value pair
// 3. return object


// Now the problem is Whenever we create a user - functions will also be created
// Hence for each user - space will be allocated for function in memory
// And for lakhs of user - Total space allocated - for functions alone will be huge
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
  }
  user.is18 = function () {
    return this.age >= 18;
  }
  return user;
}

const user7 = createUser("Jivesh", 'Sehgal', 'sehgaljivesh24@gmail.com', 23, 'HouseNumber, Colony, Pincode, State')
console.log(user7);
console.log(user7.about());

const user8 = createUser("Sukriti", 'Sehgal', 'NA', 18, 'HouseNumber, Colony, Pincode, State')
console.log(user8);



// 9. First solution to that problem
// --------------------- IMPORTANT------------------
// Function definition will remain same for all Users - hence space needs to be allocated in memory once

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },

  is18: function () {
    return this.age >= 18;
  }
}


function createUser2(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;  // Just storing the reference of that variables
  user.is18 = userMethods.is18;
  return user;
}

const user9 = createUser2("Sukriti", 'Sehgal', 'NA', 18, 'HouseNumber, Colony, Pincode, State');
console.log(user9.about());
// There is also a problem in above solution
// Problem: If we need to create 1000 Fns, we need to create them in userMethods & then store there reference in user object
// It is double task for 1 thing







// 10. ___proto___  (Similar to [[prototype]] : Browser ke console mein likha hua ho sakta hai)
// --------------------- IMPORTANT------------------
// When objects eg: obj2 -> are created using Object.create(obj1).
// We access some keys which are not present in obj2,
// Then It will look for keys in Obj1 -> present in ___proto_____
// Obj2 ka]i __proto___ property -> Obj1 set hogya hai
const obj1 = {
  key1: "value1",
  key2: "value2"
}

// One More way to -> create Empty Object
const obj2 = Object.create(obj1); // Returns empty object {}
console.log(obj2);

obj2.key3 = "Value3";
console.log(obj2.key2); // Javascript pehle obj2 mein check kregi ki key2 hai ya nhi
// Agar nhi, then will go to OBJECT written in Paranthesis and if found will print its value

console.log(obj2.__proto__);







// 11. Solution to problem 9 ---------------------------IMPORTANT--------------------
// We only add Funcs in userMethod Object, no need to store its reference in user Obj

// Make userMethods3 as __proto__ for user Object
// And keep adding Functions in userMethods3 -> Automatically Javascript will call methods in UserMethods3 Object - if not found in user Object

// userMethods3 reference stored in __proto___
const userMethods3 = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },

  is18: function () {
    return this.age >= 18;
  },

  sing: function () {
    console.log(`${this.firstName} sings melodious songs!`);
  }
}


function createUser3(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods3); // userMethods3 reference set as __proto__ for user Obj
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

// If we try to access any key/methods that are not present in user,
// Then it will automatically looks for them in Object whose reference is-present in __proto__
// __proto__ mein UserMethods3 object ka reference stored hai
const user10 = createUser3("Sukriti", 'Sehgal', 'NA', 18, 'HouseNumber, Colony, Pincode, State');
console.log(user10);
user10.sing(); // Not present in user10 -> Now Looks in UserMethods3 Object
console.log(user10.about());








// 12. Prototype, how to use it
// Javascript mein function => they behave like both: function & object

function hello() {
  console.log("Hello World");
}

console.log(hello.name);

// You can add your own properties
hello.myOwnProperty = "very unique value"; // Treating Fn as Object
console.log(hello.myOwnProperty);


// name property ----> tells function name

// Function provides more useful properties
// Eg - call, apply, bind methods bhi provide krta hai functions


// ---------------- IMPORTANT----------
// Function provides us free space i.e. -> Becuase they behave as Object
// Free Space refers to {} empty object, just for understanding
// This object is called - PROTOTYPE  ->>>> ONLY FUNCTIONS provide them
console.log(hello.prototype);
// This is given to us - to use it
// TO ADD KEY/VALUE Pair that is related to this function


hello.prototype.abc = "abc";
console.log(hello.prototype.abc);
hello.prototype.sayMyName = function () {
  console.log("Heisenbeg");
}
hello.prototype.sayMyName();

console.log(hello.prototype);








// 13. Optimized & Better Solution to - Point 11
// createUser4 optimized using PROTOTYPE
// Instead of creating a separate Object - userMethods
// Use PROTOTYPE object present in a function
function createUser4(firstName, lastName, email, age, address) {
  const user = Object.create(createUser4.prototype); // createUser4.prototype reference set as __proto__ for user Obj
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

createUser4.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser4.prototype.is18 = function () {
  return this.age >= 18;
};
createUser4.prototype.sing = function () {
  console.log(`${this.firstName} sings melodious songs!`);
};

const user11 = createUser4("Sukriti", 'Sehgal', 'NA', 18, 'HouseNumber, Colony, Pincode, State');

user11.sing();








// 14. new Keyword - kya hota hai, kese kaam krta hai

