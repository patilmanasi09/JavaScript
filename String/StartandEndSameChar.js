function sameStartEnd(str) {
  if (str.length === 0) return false;
  return str[0] === str[str.length - 1];
}

console.log(sameStartEnd("madam")); 
console.log(sameStartEnd("hello")); 