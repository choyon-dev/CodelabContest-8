function removeDuplicateCharacters(str) {
  let result = "";
  let seen = [];

  for (let i = 0; i < str.length; i++) {
    if (!seen.includes(str[i])) {
      result += str[i];
      seen.push(str[i]);
    }
  }

  return result;
}



// let test = removeDuplicateCharacters("hello");
// let test = removeDuplicateCharacters("programming");
// let test = removeDuplicateCharacters("world");
console.log(test);