// to check for a value in JS

function checkForValue(arr,valueToCheck){
    const filteredArray=arr.filter((item)=>item===valueToCheck)
    return filteredArray.length >0 // this will retrun true or false
    return filteredArray //this will retrun array of checked value
}

const arr = [1, 2, 3, 4, 6, 5];
const arr2 = [6, 7, 8, 3, 9];

console.log(checkForValue(arr,3))

const checkAnotherValue=(arr,valueToCheck)=>{
    return arr.filter((item)=>valueToCheck.includes(item))

}

console.log(checkAnotherValue(arr,arr2))

const newCheck=(arr,valueToCheck)=>{
    return arr.filter((item)=>item===valueToCheck)

}

console.log(newCheck(arr,2))

function checkNewValue(array,valueToCheck){
    const filteredArray=array.filter((item)=>item===valueToCheck)
    return filteredArray.length >0
    return filteredArray

}

console.log(checkNewValue(arr2,33))