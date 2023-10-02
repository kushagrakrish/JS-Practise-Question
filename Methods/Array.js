//To find the avergae of a number
function averageNumber(arr) {
    const sum = arr.reduce((acc, current) => acc + current);
    return sum / arr.length;
  }
  console.log(averageNumber([1, 2, 3]));

  function findAvg(arr){
    const sum=arr.reduce((acc,curr)=>acc+curr)
    return sum/arr.length
  }

  console.log(findAvg([1,2,3,4,5,6]))

  const characters = [
    {
      name: "kushagra Yadav",
      height: 172,
      mass: 160,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Jane Yadav",
      height: 165,
      mass: 120,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Alex Singh",
      height: 180,
      mass: 175,
      eye_color: "green",
      gender: "male",
    },
    {
      name: "Lily Yadav",
      height: 158,
      mass: 140,
      eye_color: "hazel",
      gender: "female",
    },
    {
      name: "Max Jain",
      height: 190,
      mass: 200,
      eye_color: "brown",
      gender: "male",
    },
  ];

const lessMass=()=>{
  return  characters.filter((character)=>{
      return  character.mass <150
    })
}

  console.log(lessMass())

const getNameAndHeight=()=>{
    return characters?.map((character)=>{
        return {
            name:character.name,
            height:character.height
        }
    })
}

console.log(getNameAndHeight())

const getFirstName=()=>{
    return characters.map((character)=>{
        return character.name.split(" ")[0]
    })
}

console.log(getFirstName())


const word='Kushagra Krishna'

//Reverse the name without changing index

// const reverseName=(word)=>{
// let newWord=[];
// newWord=word.split("");
// return newWord.reverse().join().toString()
// }

// console.log(reverseName())

const array = ["25", "55", "66"];


const sumArray=array.map((str)=>{
    const digits=str.split("")
    const sumDigit=digits.reduce((acc,curr)=>
acc +parseInt(curr)
    ,0)
    return String(sumDigit)
})

console.log(sumArray)

//Callback function

setTimeout(function(){
    console.log('This is prineted after 3 sec')
},3000)


//Reverse a string
function reverseString(str){
    return str.split("").reverse()
}
console.log(reverseString("hello"));


//Reverse words is sentence
function reverseWords(sentence){
    const words=sentence.split(" ")
    const reverseWords=words.map((word)=>{
        return word.split("").reverse().join()
    })
    return reverseWords
}

console.log(reverseString('My name is Kushagra'))


//Reverse the words without chaning index

function reverseWordsIndex(words){
    let newWords=[]
   newWords=words.split("")
   return newWords.reverse().join()
}

console.log(reverseWordsIndex('My name is kushagra'))

function reverseWords(sentence) {
    // Split the sentence into words using space as a delimiter
    const words = sentence.split(' ');
  
    // Reverse each word and store them in an array
    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
  
    // Join the reversed words back into a sentence with spaces
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  // Example usage:
  const inputSentence = "Hello World";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); // Outputs: "olleH dlroW"

  function reverseWordsWithoutIndex(sentence){

    const words=sentence.split(" ")

    const reversedWords=words.map((word)=>{
        return word.split("").reverse().join()
    })

    return reversedWords
  }
  
  console.log(reverseWordsWithoutIndex("My name is kushagra"))

  const number=['23','55','44']

 const arraySum=number.map((str)=>{
    const digit=str.split('')
    const digitSum=digit.reduce((acc,curr)=>
acc + parseInt(curr)
    ,0)
    return digitSum
 })

 console.log(arraySum)


 function reverse(sentence){
    const words=sentence.split(" ")
    const reverseWords=words.map((word)=>{
        return word.split('').reverse().join()
    })
    return reverseWords
 }
 console.log(reverse("Hello Manan"))


 function arrayAvg(arr){
    const sum=arr.reduce((acc,curr)=>acc+curr,0)
    return sum/arr.length
 }

 console.log(arrayAvg(number))