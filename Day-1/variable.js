// Day-1 
// variable and data types
//Activity 1:variable Declaration
/* Task 1 */
//1. Declaring varible using var,assigning it to a number and consoling it
var num = 10;
console.log(num)

//2. declaring a varible using let, assiging it to s string, and cosoling value.

let string = "javascript";
console.log(string)

//Activity 2:Constant Declaration
// 3. constant declaration

const bool = true;
console.log(bool)

//Activity 3:Data types



let nums = 3;
let str = "JS" 
let boolean = 'true'
let array = [1,2];
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
let undef;
let n = null;

let bign = BigInt(786868686666663)

console.log(typeof(nums))
console.log(typeof(chars))
console.log(typeof(boolean))
console.log(typeof(array))
console.log(typeof(person))
console.log(typeof(undef))
console.log(typeof(n))
console.log(typeof(bign))

//4. Reassgin variable
let a =6;
//reassiging variale
a = "HTML"
console.log(a)
// here a will give output "html,it will reassign a's intial value.

//understanding const 
const name = "danish";
name = "ansari"
// here name will be not re assigned because we can't reassign constant
console.log(name)