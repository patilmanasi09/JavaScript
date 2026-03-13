function capitalizeWords(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

let text = "hello world from javascript";
console.log(capitalizeWords(text));