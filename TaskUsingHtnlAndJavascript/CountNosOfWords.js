function countWords(sentence){
    if(!sentence) return 0;
    return sentence.trim().split(/\s+/).length;
}
console.log("WordCount:", countWords("Welocom to JavaScript"));

