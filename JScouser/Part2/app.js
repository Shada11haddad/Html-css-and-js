// ================================
//              part 2
//             Started
// ================================

// ================================
// SECTION 2.1 : Template Strings
// ================================
console.log(`time is
${new Date().getHours()}:
${new Date().getMinutes()}`);

const name = 'John';
const age = '22';
function info() {
    return 'Hello, My name is ${name} and I am ${age} years old';
}

console.log(`${info()}`);
// ================================
// SECTION 2.1: Challenge
//=================================
const text =`the quick
brown fox 
jumps over 
the lazy dog`;

console.log(text);
const fName = 'shada';
const lName = 'haddad';

console.log(`Hello, My name is ${fName} ${lName} and I am ${age} years old`);

// ================================
// SECTION 2.2 : Arrow Functions
// ================================
greet = (userName) => { 
return `hello, ${userName}`;
}

console.log(greet("shada"));

const duble= n =>n * 2;

console.log(duble(8));

// ================================
// SECTION 2.2: Challenge
//=================================
setTimeout( ()=> {
    console.log('Hello after 4 seconds');
    setTimeout( ()=> {
        console.log('Hello after 8 seconds');
        setTimeout( () => {
            console.log('Hello after 12 seconds');
            setTimeout( ()=> {
                console.log('Hello after 16 seconds');
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

// ================================
// SECTION 2.3 : Enhanced Object Literals
// ================================
function userInfo(name, age, work) {
    return {
        name,
        age,
        work,
        greet() {
            return `Hello, My name is ${this.name} and I am ${this.age} years old`;
        }
    }
}

const user1 = userInfo('shada', 22, 'developer');
console.log(user1.greet());

// ================================
// SECTION 2.2: Challenge
//=================================
function letter(a, b, c) {
    return {
        a,
        b,
        c,
        print() {
            return `a:${this.a}, b:${this.b}, c:${this.c}`;
        }
    }
} 

console.log(letter(1, 2, 3));

// ================================
// SECTION 2.4 :Default Parameters
// ================================


// ================================
// SECTION 2.5 : Spread Operator
// ================================

// ================================
// SECTION 2.6 : Rest Operator
// ================================

// ================================
// SECTION 2.7 : Array Destructuring
// ================================

// ================================
// SECTION 2.8 : Object Destructuring
// ================================

// ================================
// SECTION 2.9 : Advanced Destructuring
// ================================

// ================================
// SECTION 2.10 : Function Destructuring
// ================================


// ================================
// SECTION 2.11 : Nested Destructuring
// ================================

// ================================
// SECTION 2.12 : Destructuring Craziness
// ================================

// ================================
// SECTION 2.13 : Ternary Operator
// ================================

// ================================
// SECTION 2.14 : For-In Loop
// ================================

// ================================
// SECTION 2.15 : For-Of Loop
// ================================

// ================================
// SECTION 2.16 :  forEach Method
// ================================

// ================================
// SECTION 2.17 : map Helper
// ================================

// ================================
// SECTION 2.18 :filter Helper
// ================================

// ================================
// SECTION 2.19 : find Helper
// ================================

// ================================
// SECTION 2.20 : every & some Helpers
// ================================

// ================================
// SECTION 2.21 : reduce Helper
// ================================

// ================================
// SECTION 2.22 : Map Data Structure
// ================================

// ================================
// SECTION 2.23 : Sets Data Structure
// ================================

// ================================
// SECTION 2.24 : Symbols in JavaScript
// ================================
// ================================
// SECTION 2.25 : Introduction to DOM
// ================================
// ================================
// SECTION 2.26 : DOM Setup
// ================================
// ================================
// SECTION 2.27 : Accessing DOM Elements
// ================================
// ================================
// SECTION 2.28 : Manipulating Text Content
// ================================