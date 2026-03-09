const prompt = require("prompt-sync")();

let weight = parseFloat(prompt("Enter Weight (kg) :"));
let height = parseFloat(prompt("Enter Height (m) :"));

let bmi = weight / (height * height);
console.log("BMI:", bmi);

if (bmi < 18.5) {

console.log("Category: Underweight");

} 

else if (bmi >= 18.5 && bmi < 24.9) {

console.log("Category: Normal weight");

} 

else if (bmi >= 25 && bmi < 29.9) {

console.log("Category: Overweight");

} 
else if (bmi >= 30) {

console.log("Category: Obesity");
}