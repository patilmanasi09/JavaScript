function removeNonAlphanumeric(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z" || ch >= "0" && ch <= "9") {
      result += ch;
    }
  }

  return result;
}

console.log(removeNonAlphanumeric("Hello@#123!"));
