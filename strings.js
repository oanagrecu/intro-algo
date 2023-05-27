// I - concatenation
// Write a function which receives two strings and returns them as one string.
const prompt = require('prompt-sync')({sigint:true});

function combineStrings() {
  const str1 = String(prompt(" write a word: "));
  const str2 = String(prompt(" write the second word: "));
    return str1 + " " +  str2;
  }
  console.log(combineStrings());


// II - lowercase
// Write a function which receives a character in uppercase and prints it in lowercase.
function uppercaseToLower(){
  const word1 =String(prompt("Write a word with capital letters:   "))
    const newWord = word1.toLowerCase();
  return newWord;
}
// const word2 ="Ana";
console.log(uppercaseToLower());


// III - uppercase
// Write a function which receives a string in lowercase and returns an uppercase sentence.
function lowercaseToUpper(){
  const word2 =String(prompt("Write a word in lowercase: "))
    const newWord1 = word2.toUpperCase();
  return newWord1;
}
// const word6 ="alexandra";
console.log(lowercaseToUpper());
// IV - convert name
// Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"
function arrangeNames(name) {
    const parts = name.split(", ");
    const firstName = parts[1];
    const lastName = parts[0];
    const rearrangedName = `${firstName} ${lastName}`;
    return rearrangedName;
  }
console.log(arrangeNames("alexandru , grecu"));
// V - whitespace
// Write a function which receives a sentence full of whitespace and returns it without them.
function removeWhitespace() {
  const sentence = String(prompt("Write a sentence: "));
  var result = "";
  
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      result += sentence[i];
    }
  }
  return result;
}

console.log(removeWhitespace()); 