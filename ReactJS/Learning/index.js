const { count } = require("console");

function multOfTwo(a = 4, b= 5) {
    console.log('Multiplying ' + a + ' and ' + b + ' to get ' + a * b)
    
  return a * b;
}


console.log(multOfTwo(2, 3));



const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log([...array]);


//map , filter,find,some,every,reduce,forEach

const personArray = [
    { name: 'John', age: 25 , country: 'USA'},
    { name: 'Jane', age: 30, country: 'Canada' },
    { name: 'Jack', age: 29, country: 'USA' },
    { name: 'Jill', age: 35, country: 'Canada' },
    { name: 'James', age: 26, country: 'USA' },
    { name: 'Jenny', age: 32, country: 'Canada' }

]

let getAllNames = personArray.map((Singleperson, index) =>
{return Singleperson.name + ' ' + Singleperson.age + ' ' + Singleperson.country});  
    console.log(getAllNames);