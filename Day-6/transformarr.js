let arr = [1,2,3,4,5]

function transformArray() {
    const array =arr.map((num)=> num * num) // square every element in arr
    console.log(array)

    const array1 =arr.filter((num)=> num%2 != 0) // check every elemnt is odd return new arra in array1
    console.log(array1)

    const array2 =arr.reduce((acc,cval)=> acc * cval) // multiply all the numbers and give one value
    console.log(array2) 
}
transformArray()