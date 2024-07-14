// Activty 1
let a = 9;
let b = 6;

let addition = a+b;
let subtract = a+b;
let multiply = a*b;
let divide = a/b;
let remainder = a%b;

console.log("addition =" + addition + " subtraction =" + subtract +" multiply = " + multiply +" divide = "+ divide+ " remainder = "+ remainder)

// Activity 2
let res=0;
let res1=8;
res+=a;
res1-=b
console.log(res,res1)

//Activity 3
console.log(">",a>b)
console.log("<",a<b)
console.log("==",a==b)
console.log(">=",a>=b)
console.log("<=",a<=b)
console.log("===",a===b)

//Activity 4

console.log("dono sahi hona chahiye&&",a>b && res<res1) //one condition is true,so answer will be fasle, need both conditions to be true

console.log("ek sahi hona chaiye ||",a>b && res>res1) //one condition is true,so answer will be fasle, need only one condition is to be true
console.log('!galat hai iska mtlv',!(res<res1)) // here res1 is greater which is true, s it will print false

// activity 5
let tern = (a>b)? console.log('sahi hai') : console.log('galat hai') //a = 9 , b=6
let tern1 = (a<b)? console.log('sahi hai') : console.log('galat hai') //a = 9 , b=6