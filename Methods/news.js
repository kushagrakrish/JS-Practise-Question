const word = "Hello World";

// function reverseWords(word) {
//   let newWord = [];
//   newWord = word.split("");
//   return newWord.reverse().join().toString();
// }

// console.log(reverseWords(word));


function reverseWord(sentence){
    const words=sentence.split(" ")
    const reverseWords=words.map((word)=>{
        return word.split("").reverse().join()
    })
    return reverseWords
}