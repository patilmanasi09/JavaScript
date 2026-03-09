const prompt = require("prompt-sync")();

let age = Number(prompt("Enter your age: "));
let isCitizen = prompt("Are you citizen (true/false)?") === "true";

let canVote = (age>=18) && isCitizen;
console.log("Eligible to vote:", canVote);