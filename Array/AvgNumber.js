//To find the average number in a array

function findAverage(arr){
    const sum=arr.reduce((acc,curr)=>acc+curr)
    return sum/arr.length
}

const newNumber=[1,2,3,]

console.log(findAverage(newNumber))
console.log(newNumber.length)


function toFindAvg(arr){
    const sum=arr.reduce((acc,curr)=>acc+curr)
    const average=sum/arr.length
    return average
}

console.log(toFindAvg(newNumber))