// ================================
// SECTION 1: VARIABLES & BASIC OPERATIONS
// ================================

// We do not need to import console or type in a typical JS file, so these lines are removed.

// Variables
const name = "Shada"; // using const because the value won’t change
let whatDoYouWannaBecomeInYourLife = "programmer"; // corrected typo from "prgogrammer"
const gender = "Female";
const twitterHandle = "shada_019";

// Arithmetic Operations
let firstFavNumber = 5;
let secondFavNumber = 10;
let sum = firstFavNumber + secondFavNumber;
let difference = firstFavNumber - secondFavNumber;
let product = firstFavNumber * secondFavNumber;
let quotient = firstFavNumber / secondFavNumber;
let remainder = firstFavNumber % secondFavNumber;
let power = firstFavNumber ** secondFavNumber;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Power:", power);

// Working with booleans
const isJsProgrammingLanguage = true;
const isJsHard = false;
const favNumb = 4;
console.log("favNumb + undefined gives:", favNumb + undefined); // results in NaN

// Relational operators
console.log(
"Is firstFavNumber greater than secondFavNumber:",
firstFavNumber > secondFavNumber
);
console.log(
"Is firstFavNumber less than secondFavNumber:",
firstFavNumber < secondFavNumber
);
console.log(
"Is firstFavNumber greater than or equal to secondFavNumber:",
firstFavNumber >= secondFavNumber
);
console.log(
"Is firstFavNumber less than or equal to secondFavNumber:",
firstFavNumber <= secondFavNumber
);
console.log(
"Is firstFavNumber loosely equal to secondFavNumber:",
firstFavNumber == secondFavNumber
);
console.log(
"Is firstFavNumber loosely not equal to secondFavNumber:",
firstFavNumber != secondFavNumber
);
console.log(
"Is firstFavNumber strictly equal to secondFavNumber:",
firstFavNumber === secondFavNumber
);
console.log(
"Is firstFavNumber strictly not equal to secondFavNumber:",
firstFavNumber !== secondFavNumber
);

// ================================
// SECTION 2: STRING MANIPULATION
// ================================

let favActorFirstName = "Tom";
let favActorLastName = "Hanks";
let fullActorName = favActorFirstName + " " + favActorLastName;
let UPPERCASE = fullActorName.toUpperCase();
let message = "Hello " + fullActorName + "!";
let messageTemplate = `Hello ${fullActorName}!`;

console.log("Uppercase actor name:", UPPERCASE);
console.log(message);
console.log(messageTemplate);

// Append strings with template literals
let favMovie = "Forrest Gump";
let favMovieQuote = "Life is like a box of chocolates. ";
let favMovieQuoteFull = `${favMovieQuote}${favMovie} - ${favActorFirstName} ${favActorLastName}`;
console.log("Favorite movie quote:", favMovieQuoteFull);

// ================================
// SECTION 3: TYPE CONVERSION
// ================================
let money = "100";
console.log("Type of money (before):", typeof money);
let moneyInt = parseInt(money);
console.log("Type of moneyInt (after parseInt):", typeof moneyInt);

// ================================
// SECTION 4: CONDITIONAL STATEMENTS
// ================================

// Simple if/else example
let a = 10;
let b = 20;
if (a > b) {
console.log("a is greater than b");
} else if (a < b) {
console.log("a is less than b");
} else {
console.log("a is equal to b");
}

// ----- Challenge 1: Password Length Check -----
// Here, we check if a provided password is exactly 8 characters long.
let password = "shada123"; // Try changing this value for testing

if (!password) {
console.log("Please provide a password");
} else if (password.length < 8) {
console.log("Password is too short");
} else if (password.length > 8) {
console.log("Password is too long. Password should be 8 characters long");
} else {
console.log("Welcome");
}

// ================================
// SECTION 5: SWITCH STATEMENTS
// ================================

let x = 0;
let text;
switch (x) {
case 0:
    text = "Off";
    console.log("Switch x-case:", text);
    break;
case 1:
    text = "On";
    console.log("Switch x-case:", text);
    break;
default:
    text = "No value found";
    console.log("Switch x-case:", text);
}

// ----- Challenge 2: Fruit Colors -----
let fruit = "banana";
switch (fruit) {
case "banana":
    console.log("Banana is yellow");
    break;
case "apple":
    console.log("Apple is red");
    break;
case "grapes":
    console.log("Grapes are green");
    break;
default:
    console.log("I don't know the color of this fruit");
}

// ================================
// SECTION 6: LOOPS
// ================================

// For Loop: Counting from 0 to 10
for (let i = 0; i <= 10; i++) {
console.log("For loop i:", i);
}

// Nested Loop: Multiplication Table (1 to 10)
for (let x = 1; x <= 10; x++) {
for (let y = 1; y <= 10; y++) {
    console.log(`${x} * ${y} = ${x * y}`);
}
}

// ----- Challenge 3: Print "Shada Haddad" 1000 Times -----
for (let num = 1; num <= 1000; num++) {
console.log(`Shada Haddad ${num}`);
}

// While Loop Example
let i = 0;
while (i <= 5) {
console.log("While loop i:", i);
i++;
}

// ----- Challenge 4: While Loop with Condition -----
i = 0; // reset i
while (i <= 100) {
i++;
if (i <= 10) {
    console.log("Challenge 4 - Shada Haddad", i);
}
}

// Do-While Loop Example
i = 0; // reset i again for do-while
do {
console.log("Do-While loop i:", i);
i++;
} while (i <= 5);

// ----- Challenge 5: Do-While Loop from 20 to 400 -----
// (Note: This loop will print many lines!)
let d = 20;
do {
console.log("Challenge 5 - d:", d);
d++;
} while (d <= 400);

// ================================
// SECTION 7: LOGICAL OPERATIONS
// ================================
const sky = true;
const sun = true;
const moon = false;
const stars = false;

console.log("Logical AND (sky && sun):", sky && sun);
console.log("Logical OR (sky || moon):", sky || moon);
console.log("Logical NOT (!moon):", !moon);

let passwordUser = "shada123";
if (passwordUser.length >= 8 || passwordUser.includes("@")) {
console.log("Password is strong");
} else {
console.log("Password is weak");
}

// ================================
// SECTION 8: ARRAYS & ARRAY TECHNIQUES
// ================================

// Basic Arrays
const emptyArray = [];
const numberArray = [1, 2, 4, 5, 6];
const stringArray = ["Shada", "Haddad"];
const mixedArray = [1, "Shada", true];

console.log("Second element of numberArray:", numberArray[1]);

// Adding and Removing Items
numberArray.push(7);
console.log("After push:", numberArray);
numberArray.pop();
console.log("After pop:", numberArray);

// Nested Arrays
const nestedArray = [
[1, 2],
[3, 4],
[5, 6],
];
console.log("Nested array [1][0]:", nestedArray[1][0]);

const mixedNestedArray = [[1, "Shada"], [true, 4], [5, 6], "one", 100, true];
console.log("Mixed nested array [1][0]:", mixedNestedArray[1][0]);

const myLetters = ["a", "b", "c", "d", "e"];
console.log("Length of myLetters:", myLetters.length);

// Array of Objects
const objectArray = [
{ name: "Shada", age: 22 },
{ name: "Haddad", age: 23 },
];

// ----- Challenge 6: Favorite Singers and Mixed Array -----
const myFavSingers = ["mehd mahad", "nancy ajram", "elissa", "amr diab"];
console.log("First favorite singer:", myFavSingers[0]);

const myFavNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mixArr = ["string", [1, 2, 3], { name: "shada", age: 22 }, true];
console.log("Mixed Array:", mixArr);
console.log("mixArr[0]:", mixArr[0]);
console.log("mixArr[1]:", mixArr[1]);
console.log("mixArr[2]:", mixArr[2]);
console.log("mixArr[3]:", mixArr[3]);

// -------- Array Techniques --------

// forEach
const myNumbersForEach = [1, 2, 3, 4, 5];
myNumbersForEach.forEach(function (number) {
console.log("forEach:", number);
});

// concat
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const thirdArray = firstArray.concat(secondArray);
console.log("Concatenated array:", thirdArray);

// includes
const myNumbersIncludes = [1, 2, 3, 4, 5];
console.log("Array includes 3:", myNumbersIncludes.includes(3));

// push
const myNumbersPush = [1, 2, 3, 4, 5];
myNumbersPush.push(6);
console.log("After push:", myNumbersPush);

// pop
const myNumbersPop = [1, 2, 3, 4, 5];
myNumbersPop.pop();
console.log("After pop:", myNumbersPop);

// unshift
const myNumbersUnshift = [1, 2, 3, 4, 5];
myNumbersUnshift.unshift(0);
console.log("After unshift:", myNumbersUnshift);

// shift
const myNumbersShift = [1, 2, 3, 4, 5];
myNumbersShift.shift();
console.log("After shift:", myNumbersShift);

// sort
const myNumbersSort = [5, 4, 3, 2, 1];
myNumbersSort.sort((a, b) => a - b); // numeric sort
console.log("Sorted array:", myNumbersSort);

// slice
const myNumbersSlice = [1, 2, 3, 4, 5];
const slicedArray = myNumbersSlice.slice(1, 3);
console.log("Sliced array (index 1 to 2):", slicedArray);

// splice
const myNumbersSplice = [1, 2, 3, 4, 5];
myNumbersSplice.splice(1, 2); // removes 2 items starting from index 1
console.log("After splice:", myNumbersSplice);

// join
const myLettersJoin = ["a", "b", "c", "d", "e"];
const joinedLetters = myLettersJoin.join("|");
console.log("Joined letters:", joinedLetters);

// indexOf and lastIndexOf
const myLettersIndex = ["a", "b", "c", "d", "e"];
console.log("Index of 'c':", myLettersIndex.indexOf("c"));
console.log("Last index of 'c':", myLettersIndex.lastIndexOf("c"));

// reverse
const myLettersReverse = ["a", "b", "c", "d", "e"];
myLettersReverse.reverse();
console.log("Reversed letters:", myLettersReverse);

// map
const myNumbersMap = [1, 2, 3, 4, 5];
const doubleNumbers = myNumbersMap.map(function (number) {
  return number * 2;
});
console.log("Doubled numbers (map):", doubleNumbers);

// filter
const myNumbersFilter = [1, 2, 3, 4, 5];
const evenNumbers = myNumbersFilter.filter(function (number) {
return number % 2 === 0;
});
console.log("Even numbers (filter):", evenNumbers);

// reduce
const myNumbersReduce = [1, 2, 3, 4, 5];
const sumReduced = myNumbersReduce.reduce(function (total, number) {
return total + number;
}, 0);
console.log("Sum (reduce):", sumReduced);

// find
const myNumbersFind = [1, 2, 3, 4, 5];
const foundNumber = myNumbersFind.find(function (number) {
return number > 3;
});
console.log("Found number > 3:", foundNumber);

// findIndex
const myNumbersFindIndex = [1, 2, 3, 4, 5];
const foundIndex = myNumbersFindIndex.findIndex(function (number) {
return number > 3;
});
console.log("Index of number > 3:", foundIndex);

// some
const myNumbersSome = [1, 2, 3, 4, 5];
const someNumbers = myNumbersSome.some(function (number) {
return number > 3;
});
console.log("Some numbers > 3:", someNumbers);

// every
const myNumbersEvery = [1, 2, 3, 4, 5];
const everyNumbers = myNumbersEvery.every(function (number) {
return number > 3;
});
console.log("Every number > 3:", everyNumbers);

// ================================
// SECTION 9: OBJECTS & METHODS
// ================================

const person = {
name: "Shada",
age: 22,
location: ["Saudi Arabia", "Jeddah"],
lastName: "Haddad",
employState: false,
};

// Adding a new property
person.middleName = "Mahmoud";
console.log("Employ state:", person.employState);

// ----- Challenge 6 (Alternate): Modifying an Object -----
// Here, a Car object is created and then properties are added to the person object.
const car = {
type: "Mazda",
model: "CX-9",
color: "Red",
};

// For demonstration, we add new properties to person:
person.type = "Toyota";
person.wheels = 4;
console.log("Modified person object:", person);

// ================================
// SECTION 10: FUNCTIONS & CALLBACKS
// ================================

// Function Declaration
function Greeting() {
console.log("Hello");
}
Greeting();

// Function Expression with Parameter
function SayHello(name) {
console.log(`Hello ${name}`);
}
SayHello("Shada");

// Function that returns a value
function add(a, b) {
return a + b;
}
console.log("add(4,3):", add(4, 3));
console.log("add(32,12):", add(32, 12)); // corrected to pass two arguments

// ----- Challenge 7: Multiplication Function -----
// Renamed the function to 'multiply' and declared the variable properly.
function multiply(P1, P2) {
  let multi = P1 * P2;
return multi;
}
console.log("multiply(5,10):", multiply(5, 10));

// Function Declaration with String Interpolation Correction
function GreetingName(userName) {
console.log(`Hello ${userName}`);
}
GreetingName("Shada");

// Function Expression with Template Literals
const Welcome = function (userName) {
console.log(`Welcome ${userName}`);
};
Welcome("Shada");

// Callback Functions
function showCallback(fn) {
const value = 10;
fn(value);
}
showCallback(function (value) {
console.log("Callback value:", value);
});

function OP(name, cb) {
console.log(`Hello ${name}`);
cb();
}
function callbackFunction() {
console.log("I am a callback function");
}
OP("Shada", callbackFunction);

// ----- Challenge 8: Callback Function Example -----
function showCallbackFunction(fn) {
const value = 10;
fn(value);
}
showCallbackFunction(function (value) {
console.log("Challenge 8 callback value:", value);
});

// ================================
// SECTION 11: VARIABLE SCOPE
// ================================

let textMessage = "Hello"; // global scope
console.log("Global textMessage:", textMessage);
function showMessage() {
let textMessage = "Hello from local scope";
console.log("Local textMessage:", textMessage);
}
showMessage();

// ================================
// SECTION 12: OBJECT METHODS
// ================================

// Object method using a function that uses template literals correctly
function greetHuman() {
return `Hello, I am a human. My name is ${human.name} and I am ${human.age} years old.`;
}
const human = {
name: "Shada",
age: 22,
greet: greetHuman,
job: function () {
    console.log("Job function called.");
},
};
console.log("Human greet:", human.greet());

// ================================
// SECTION 13: JSON HANDLING
// ================================

const personJson = {
name: "John",
age: 30,
city: "New York",
hobbies: ["Reading", "Travelling", "Coding"],
address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
},
};

const personJsonString = JSON.stringify(personJson);
const personObject = JSON.parse(personJsonString);
console.log("Parsed person JSON object:", personObject);

// ================================
// SECTION 14: DATE OBJECT
// ================================

const today = new Date();
console.log("Today is:", today.toString());

const currentDate = new Date(2025, 0, 1, 0, 0, 0, 0);
console.log("Custom current date:", currentDate.toString());
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log("Date:", date);
console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
const tomorrow = date.setDate(date.getDate() + 1);
const yesterday = date.setDate(date.getDate() - 1);
console.log("Tomorrow:", new Date(tomorrow).toDateString());
console.log("Yesterday:", new Date(yesterday).toDateString());
// ================================
// SECTION 15: setInterval & setTimeout
// ================================

// setInterval

setInterval(() =>
    console.log('this function will run every 2 seconds'),
    2000

);

setTimeout(function () {
    console.log('this function will be called after 3 seconds');
}, 3000);
    
const Intervald = setInterval(function() {
    console 
},1000);

//stop the interval after 5 seconds
setTimeout(function() {
    clearInterval(Intervald);
    console.log('interval stopped');
},5000);
// ================================
//             finished 
//              part 1
// ================================
