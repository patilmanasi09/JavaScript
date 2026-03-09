const prompt = require("prompt-sync")();

let length = parseFloat(prompt("Enter Length: "));
let width = parseFloat(prompt("Enter Width: "));

let perimeter = 2 * (length + width);
let area = length * width;

console.log("Perimeter:", perimeter);
console.log("Area:", area);
console.log("Is perimeter grater than area?", perimeter > area);