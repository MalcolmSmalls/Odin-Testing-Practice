const analyzeArray = array => {
    let newArr = array.sort((a,b) => a-b)
    let sum = newArr.reduce((prev, curr) => prev + curr, 0)
    let object = {
        average: Math.round(sum / newArr.length),
        min: newArr[0],
        max: newArr[newArr.length-1],
        length: array.length
    }
    return object

}

console.log(analyzeArray([1,8,3,4,2,6]))

module.exports = analyzeArray