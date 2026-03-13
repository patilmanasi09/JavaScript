let str4 = "Wisdom Sprouts";
let vowels = "aeiouAEIOU";
let countVowels = 0;

for (let i = 0; i < str4.length; i++) {
    if (vowels.includes(str4.charAt(i))) {
        countVowels++;
    }
}

console.log("Number of vowels:", countVowels);