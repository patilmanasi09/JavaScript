// Accept two numbers from the user

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

// Comparison operations
let greater = num1 > num2;
let less = num1 < num2;
let equal = num1 === num2;

// Display results
console.log("Is first number greater than second? " + greater);
console.log("Is first number less than second? " + less);
console.log("Are the two numbers equal? " + equal);