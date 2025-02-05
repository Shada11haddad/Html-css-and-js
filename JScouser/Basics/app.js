import { console } from "inspector";
import { type } from "os";
// Variables
// Reserved keywords  - var, let, const
// variable name - camelCase
// var name = 'John Doe';
//teyp of variable



const name = "shada";

let whatDoYouWannaBecomeIYourLife;
whatDoYouWannaBecomeIYourLife = "prgogrammer";
const gender ="Female";
const twitterHandle = "shada_019";
//-----------------------------//
let firstFavNumber = 5;
let secondFavNumber = 10;
let sum = firstFavNumber + secondFavNumber;
let difference = firstFavNumber - secondFavNumber;
let product = firstFavNumber * secondFavNumber;
let quotient = firstFavNumber / secondFavNumber;
let remainder = firstFavNumber % secondFavNumber;
let power = firstFavNumber ** secondFavNumber;
console.log(sum);
console.log(difference);
console.log(product);   
console.log(quotient);
console.log(remainder);
console.log(power);
//-----------------------------//

const isJsProgrammingLanguage = true;
const isJsHard = false;
const favNumb = 4;
console.log(favNumb + undefined)
//-----------------------------//

console.log("Is firstFavNumber greater than secondFavNumber: " + (firstFavNumber > secondFavNumber));
console.log("Is firstFavNumber less than secondFavNumber: " + (firstFavNumber < secondFavNumber));
console.log("Is firstFavNumber greater than or equal to secondFavNumber: " + (firstFavNumber >= secondFavNumber));
console.log("Is firstFavNumber less than or equal to secondFavNumber: " + (firstFavNumber <= secondFavNumber));
console.log("Is firstFavNumber loosely equal to secondFavNumber: " + (firstFavNumber == secondFavNumber));  // loose equality
console.log("Is firstFavNumber loosely not equal to secondFavNumber: " + (firstFavNumber != secondFavNumber));  // loose inequality
console.log("Is firstFavNumber strictly equal to secondFavNumber: " + (firstFavNumber === secondFavNumber)); // strict equality
console.log("Is firstFavNumber strictly not equal to secondFavNumber: " + (firstFavNumber !== secondFavNumber)); // strict inequality
//------------Manipulating String-----------------//
let favActorFirstName = "Tom";
let favActorLasttName = "Hanks";
let fullActorName = favActorFirstName + " " + favActorLasttName;
let UPPERCASE = fullActorName.toUpperCase();
let massege = "Hello " + fullActorName + "!";
let massege1 = `Hello ${fullActorName}!`;
// append
let favMovie = "Forest Gump";
let favMovieQuote = "Life is like a box of chocolates";
let favMovieQuote1 = `Life is like a box of chocolates`;
favMovieQuote1 += `Life is like a box of chocolates. ${favMovie}`;
let favMovieQuote3 = `Life is like a box of chocolates. ${favMovie} ${favActorFirstName} ${favActorLasttName}`;
//------------Manipulating Array-----------------//
//-----------Type Conversion------------------//
let money = "100";
console.log(typeof money)
let moneyInt = parseInt(money);
console.log(typeof money)
// ----------------02-------------------//
//-----------Conditional Statements------------------//
// if (condition) {)
// else if (condition) {)
// else {}

let a = 10;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
} else if (a < b) {
    console.log("a is less than b");
} else {
    console.log("a is equal to b");
}

//------------Challenge 1-----------------//
let password;

if (password === 8) {
    console.log("Welcome")
}
else if (password <= 8) {
    console.log("Password is too short")
}

else if (password >= 8) {
    console.log("Password is too long")
    console.log("Password should be 8 characters long")
}

else {
    console.log("Please Provide a password")
}

//-----------Switch Statements------------------//
//switch (expression) {}
// case x:
//print something
// case y:
// print somthing

let x = 0;
let text;

switch (x) {
    case '0':
        text = "Off";
        console.log(text)
        break;
    case '1':
        text = "On";
        console.log(text)

        break;
    default:
        text = "No value found";
}
//------------Challenge 2-----------------//
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
//-----------For loop------------------//
//for(initialization expression; condition; increment/decrement expression) {}
for (let i = 0; i <=  10; i++){
    console.log(i);
}
//nested Loop
for(let x = 1; x<=10 ;x++){
    for(let y = 1; y<=10; y++){
        console.log(`${x}*${y} = ${x*y}`);
    }
}
//------------Challenge 3-----------------//
for (let num = 1; num <= 1000; num++) {
    console.log("Shada Haddad" , num);
}
//-----------While Loop------------------//

//while(condaition) {}

let i = 0;
while (i <= 5) {
    console.log(i); 

//------------Challenge 4-----------------//
while (i <= 100) {
    i++;
    if(i <= 10){
        console.log("Shada Haddad", i);
    }
}   
//-----------Do-While-Loop------------------//
do {
    console.log(i);
    i++;
} while (i <= 5);
//------------Challenge 5-----------------//
let d = 20;
do {
    console.log(d);
    d++;
} while (d <= 400);


//-----------Logical Operation------------------//
//logical and(&&)
//true if both are true
const sky = true;
const sun = true;
const moon = false;
const stars = false;

console.log(sky&&sun)

//logical or(||)
//true if one is true

console.log(sky||moon)
//logical not(!)
//true if  false
    console.log(!moon)
let passwordUSer = "shada123"; 
    if (passwordUSer.length >= 8 || passwordUSer.includes('@')) {
    console.log("Password is strong");
    } else {
    console.log("Password is weak");
    }
    
//-----------Arrays Introduction------------------//
//empty array

    const emptyArray = [];
    const numberArray = [1, 2, 4, 5, 6];
    const strungArray = ["Shada", "Haddad"];
    const mixedArray = [1, "Shada", true];
//accessing item from array 
    console.log(numberArray[1]);
//adding item to array
    numberArray.push(7);
    console.log(numberArray);
//removing item from array
    numberArray.pop();
    console.log(numberArray);   
//nested array
    const nestedArray = [[1, 2], [3, 4], [5, 6]];
    console.log(nestedArray[1][0]);

//mixed nested  array
    const mixedNestedArray = [[1, "Shada"], [true, 4], [5, 6],'one',100,true];
    console.log(mixedNestedArray[1][0]);

    const myLetters = ['a', 'b', 'c', 'd', 'e'];
    console.log(myLetters.length);

//object in array
    const objectArray = [{name: "Shada", age: 22}, {name: "Haddad", age: 23}];
//------------Challenge 6-----------------//
const myFavSingers = ["mehd mahad", "nancy ajram", "elissa", "amr diab"];
    console.log(myFavSingers[0]);
    const myFavNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mixArr = ["string",[1, 2, 3], { name: "shada", age: 22 }, true];
    console.log(mixArr);
    console.log(mixArr[0]);
    console.log(mixArr[1]);
    console.log(mixArr[2]);
    console.log(mixArr[3]);
    
//-----------Arrays Techniques------------------//
//forEach
    const myNumbers = [1, 2, 3, 4, 5];
    myNumbers.forEach(function (number) {
    console.log(number);
        });
}
    
//concat
    const firstArray = [1, 2, 3];
    const secondArray = [4, 5, 6];
    const thirdArray = firstArray.concat(secondArray);
    console.log(thirdArray);
//includes
    const myNumbers = [1, 2, 3, 4, 5];
    console.log(myNumbers.includes(3));
//push
    const myNumbers2 = [1, 2, 3, 4, 5];
    myNumbers2.push(6);
    console.log(myNumbers2);
//pop
    const myNumbers3 = [1, 2, 3, 4, 5];
    myNumbers3.pop();
    console.log(myNumbers3);
//unshift
    const myNumbers4 = [1, 2, 3, 4, 5];
    myNumbers4.unshift(0);
    console.log(myNumbers4);
//shift
    const myNumbers5 = [1, 2, 3, 4, 5];
    myNumbers5.shift();
    console.log(myNumbers5);
//sort
    const myNumbers6 = [5, 4, 3, 2, 1];
    myNumbers6.sort();
    console.log(myNumbers6);
//slice
    const myNumbers7 = [1, 2, 3, 4, 5];
    const slicedArray = myNumbers7.slice(1, 3);
    console.log(slicedArray);
//splice
    const myNumbers8 = [1, 2, 3, 4, 5];
    myNumbers8.splice(1, 2);
console.log(myNumbers8);
//join
    const myLetters = ['a', 'b', 'c', 'd', 'e'];
    const joinedLetters = myLetters.join("|");
console.log(joinedLetters);
//indexOf
    const myLetters2 = ['a', 'b', 'c', 'd', 'e'];
console.log(myLetters2.indexOf('c'));
//lastIndexOf
const myLetters3 = ['a', 'b', 'c', 'd', 'e'];   
console.log(myLetters3.lastIndexOf('c'));
//reverse   
const myLetters4 = ['a', 'b', 'c', 'd', 'e'];
myLetters4.reverse();
console.log(myLetters4);
//map
const myNumbers9 = [1, 2, 3, 4, 5]; 
const doubleNumbers = myNumbers9.map(function (number) {
    return number * 2;
});
console.log(doubleNumbers);
//filter
const myNumbers10 = [1, 2, 3, 4, 5];
const evenNumbers = myNumbers10.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);
//reduce
const myNumbers11 = [1, 2, 3, 4, 5];
const sum1 = myNumbers11.reduce(function (total, number) {
    return total + number;
}, 0);

console.log(sum1);
//find
const myNumbers12 = [1, 2, 3, 4, 5];
const foundNumber = myNumbers12.find(function (number) {
    return number > 3;
});
console.log(foundNumber);
//findIndex
const myNumbers13 = [1, 2, 3, 4, 5];
const foundIndex = myNumbers13.findIndex(function (number) {
    return number > 3;
});
console.log(foundIndex);
//some
const myNumbers14 = [1, 2, 3, 4, 5];
const someNumbers = myNumbers14.some(function (number) {
    return number > 3;
});
console.log(someNumbers);
//every
const myNumbers15 = [1, 2, 3, 4, 5];
const everyNumbers = myNumbers15.every(function (number) {
    return number > 3;
});
console.log(everyNumbers);
//object in javascipt
//object literal
const person = {
    name: "Shada",
    age: 22,
    location:["Saudi Arabia", "Jeddah"],
    lastName: "Haddad",
    employState: false
};
person.middelName = "Mahmoud";
console.log(person.employState);

//------------Challenge 6-----------------//
const Car = {
    type:"Mazda",
    model:"cx9",
    color:"Red",
};

person.type = "Toyota";
person.wheels = 4;
console.log(person);

//--------------Functions Basics-----------//
//function declaration(ParameterIfany){}
function Greeting() {
    console.log("Hello")
}
//call , run , execute

Greeting();
//function expression

function SayHello(name) {
    console.log(`Hello ${name}`);

}

SayHello("Shada");

//return -> function

function add(a, b) {
    return a + b;
}

add(4,3);
const sumAdd = add(32.12);
console.log(sumAdd);

//------------Challenge 7-----------------//

function Myfunction(P1 ,P2) {
    multi = P1 * P2;

    return multi;
}

Myfunction(5, 10);

//--------------Function Types-----------//
//function declaration
function Greating(userNAem) {
    console.log('Hello ${userNAem}');
}

Greating ("shada")
//function expression
const Welcome = function (userName) {
    console.log('Welcome ${userName}');
} 
//--------------Callback Functions-----------//
function showCallFnuc(fn){
    const value = 10;
    fn(value)

}
showCallFnuc(function (value){
    console.log(value);
})


function OP(name , cb){
    console.log('Hello ${name}');
    cb()
}

function cb(){
    console.log('I am a callback function')

}

OP("shada",cb)

//--------------challenge 8-----------//
function ShowCallFUnction(fn){
    const value = 10;
    fn(value);
}
ShowCallFUnction(function(value){
    console.log(value);
})
//-------------- Variable Scope-----------//
// global scope
let textMessage = "Hello";//global scope 
console.log(textMessage);
// local scope
function showMessage(){
    let textMessage = "Hello"; //local scope
    console.log(textMessage );
}
//--------------Object Methods-----------//
function greetHuman() {
    return "Hello, I am a human. My name is ${human.name} and I am ${human.age} years old.";
}

const human = {
    name: "Shada",
    age: 22,
    greet: greetHuman,
    jop: function (){}
};
//--------------JSON Handling-----------//
{
    "name"; "Shada",
        "age"; 22
}

const personJson = {
    "name": "John",
    "age": 30,
    "city": "New York",
    "hobbies": ["Reading", "Travelling", "Coding"],
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY"
    }
}

//--------------JSON.stringfy-----------//
const personJsonString = JSON.stringify(personJson);//turn the object into a string as json data
const personObject = JSON.parse(personJsonString);//turn the string into an object
console.log(personObject);
//--------------Date Object-----------//

const today = new Date();
console.log(today);
console.log(today.toString());//convert date object to string

//return the year , month , day , hours , minutes , seconds , milliseconds
const currentDate = new Date(2025, 0, 1, 0, 0, 0, 0);
