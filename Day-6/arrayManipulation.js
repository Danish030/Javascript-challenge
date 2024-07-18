let arr = [1,8,7,4,3]  // createt an array

function arrManipulate (){
arr.push(99)
console.log(arr) // add element at last index

arr.pop()
console.log(arr) // remove element at last index  

arr.shift()
console.log(arr) // remove element at first index  

arr.unshift(5)
console.log(arr) // add element at first index  

}
arrManipulate()