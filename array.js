// Summary

// Array is a special kind of object, suited to storing and managing ordered data items.

// The declaration:

// // square brackets (usual)
// let arr = [item1, item2...];

// We can use an array as a deque with the following operations:
    // push(...items) adds items to the end.
    // pop() removes the element from the end and returns it.
    // shift() removes the element from the beginning and returns it.
    // unshift(...items) adds items to the beginning.
// To loop over the elements of the array:
    // for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
    // for (let item of arr) – the modern syntax for items only,
    // for (let i in arr) – never use.


let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles.shift();
styles.unshift("Rap", "Reggae");


// Write the function sumInput() that:

    // Asks the user for values using prompt and stores the values in the array.
    // Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    // Calculates and returns the sum of array items.

function sumInput() {
    let numbers = [];
    while (true) {
        let num = prompt("please enter a number", 0);
        if (num === "" || num === null || !isFinite(num)) break;
        numbers.push(+num);
    }
    let sum = 0;
    for(let number of numbers){
        sum +=number;
    }
    return sum;
} 
alert(sumInput());

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

function copySorted(arr) {
    return arr.slice().sort();
}
  
let arr = ["HTML", "JavaScript", "CSS"];
  
let sorted = copySorted(arr);
  
alert( sorted );
alert( arr );

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(strings) );


// Map – is a collection of keyed values.

// Methods and properties:

    // new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
    // map.set(key, value) – stores the value by the key, returns the map itself.
    // map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    // map.has(key) – returns true if the key exists, false otherwise.
    // map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
    // map.clear() – removes everything from the map.
    // map.size – returns the current element count.
// The differences from a regular Object:

    // Any keys, objects can be keys.
    // Additional convenient methods, the size property.
// Set – is a collection of unique values.

// Methods and properties:

    // new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
    // set.add(value) – adds a value (does nothing if value exists), returns the set itself.
    // set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    // set.has(value) – returns true if the value exists in the set, otherwise false.
    // set.clear() – removes everything from the set.
    // set.size – is the elements count.
// Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.


// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    return Array.from(new Set(arr));
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(values) );

// Anagrams are words that have the same number of same letters, but in different order.
// Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arry) {
    let obj = {};
  
    for (let i = 0; i < arry.length; i++) {
      let sorted = arry[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arry[i];
    }
  
    return Object.values(obj);
}
  
let arry = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
alert( aclean(arry) );


// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }

    return sum;
}
  
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
alert( sumSalaries(salaries) );


