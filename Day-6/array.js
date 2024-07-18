// Activity 1
const arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log(arr[0],arr[arr.length -1] )

// Activity 2
arr.push(9)
console.log(arr)

arr.pop(arr)
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(8)
console.log(arr)

//Activity 3

const num = arr.map((nums) => nums*2) 
console.log(num)

const even = arr.filter((check)=>check%2==0 )
console.log(even)

const array = [1,5,6,99,78]
const sumofarr = array.reduce((acc,current) => acc+current )
console.log(sumofarr)

// Activity 4

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

array.forEach(print => {
    console.log(print)
});

// Activity 5
let matrix=[];
let rows = 4;
let col = 5;
for (let i = 0; i < rows; i++) {
    //outer loop
    matrix[i] =[]
    for (let j = 0; j < col; j++) {
        matrix[i][j]= j
    }

}
console.log(matrix)
console.log(matrix[2][3])