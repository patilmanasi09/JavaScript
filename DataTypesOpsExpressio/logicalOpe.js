const prompt = require("prompt-sync")();
let mathScore = parseFloat(prompt("Enter your math score:"));
let scienceScore = parseFloat(prompt("Enter your science score:"));

let isEligible = (mathScore >= 90) && (scienceScore >= 85);
console.log("Scholarship Eligibility:",  isEligible);