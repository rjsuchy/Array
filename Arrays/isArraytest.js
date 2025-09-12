// Step 1: Create different variables
const books = ["JavaScript", "Python", "C++"];  // array
const name = "Rifat";                           // string
const age = 25;                                 // number
const mixed = [10, "Hello", true];              // array
const person = { firstName: "Rifat", age: 25 }; // object

console.log("books:", Array.isArray(books));

console.log("age:", Array.isArray(age));
console.log("person:", Array.isArray(person));

// Step 2: Check if each variable is an array
console.log("books:", Array.isArray(books) ? "This is an array." : "This is NOT an array.");
console.log("name:", Array.isArray(name) ? "This is an array." : "This is NOT an array.");
console.log("age:", Array.isArray(age) ? "This is an array." : "This is NOT an array.");
console.log("mixed:", Array.isArray(mixed) ? "This is an array." : "This is NOT an array.");
console.log("person:", Array.isArray(person) ? "This is an array." : "This is NOT an array.");
