// Activity 

 // string interpolation
let pName = "Danish";
let pAge = 22;
console.log(`hello janab ${pName}, you are ${pAge} old`)


//multiline string using template literals (` `)
console.log(`first line of string
second line of string`);

// Activity2
// Destructuring
let arr = [11,21,3,4]
let [first,second] = arr
console.log(first);
console.log(second);

const book ={
    title:"js operatins",
    author:"danish ansari"
}

const {title,author} = book;
console.log(title),
console.log(author)

// Activity 3
// Spread operator helps to loop another arr withoyt writing their arrname andindex like arr[o]
// spread operator used for 
// Combining arrays
// Passing arguments to functions
// copying arrays
const newArr = [5,6, ...arr];
console.log(newArr)

// Rest operator
function sumofN(...nums) {
   return nums.reduce((total,num)=> total+num+0);
}
console.log(sumofN(5,4,1));

// Acitivy 4
function productofN(a,b=1) {
    return a*b;
}
console.log(productofN(8));

// Activity 5
function getCar(madeBy,model,year) {
    return {
        madeBy:madeBy,
        model:model,
        year:year
    }
}
console.log(getCar("Maruti","Alto800",2012))


let key = "language"
let key0 = "Dynamic language"
const obj = {
    name: "danish",
    age:22,
    [key]:"javascript",
    [key0]:true
}

console.log(obj)
