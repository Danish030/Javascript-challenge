// let n =5;
// let a = 7;
// let b = 8;
// let str1 = "hello";
// let str2 = " world";
// function checkevenOdd() {
//     (n%2 == 0)? console.log(`${n} is even`): console.log(`${n} is odd`);
// }

// checkevenOdd()

// function squareOfn (){
// console.log(n*n)
// };

// squareOfn()

// // Activity - 2
// function maximumOfn ()  {
//     (a>b)? console.log(`${a} is greater than b`):console.log(`${b} is greater than a`);
// }

// maximumOfn()

// function concateString () {
//     console.log(str1 + str2)
// }
// concateString()

// // Activity 3

// sumoftwoNumber = () => {
// let sum = a+b;
// return sum;
// }

// console.log(sumoftwoNumber())

// checkstring = () =>{
// let res = str1.includes('p')
// console.log(res)
// }
// checkstring()

// //Activity 4
// const product = (a,b) => (a*b)
// console.log(product(8,9))

// let age = 18;
// const greeting = (name1)=> {
// console.log(`Welcome ${name1}, you are ${age} old now `)
// }

// greeting("danish")

// Activity 5


function call (fn, times){
    for(let i = 0; i < times; i++){
        fn()
    }
}

const callback = () => {
    console.log(5)
}

call(callback,3)


function applyFunctions (fn1,fn2,value){
 const result1 = fn1(value);
 const result2 = fn2(result1)
 return result2;
}

const double = x =>  x*2;
const square = x => x * x;

const finalResult = applyFunctions(double,square,3)
console.log(finalResult);