const word = "Hello World";

function reverseWords(word) {
  let newWord = [];
  newWord = word.split("");
  return newWord.reverse().join().toString();
}

console.log(reverseWords(word));
