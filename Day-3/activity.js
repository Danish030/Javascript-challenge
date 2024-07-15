// Activity -1
let n =6
if (n>0) {
    console.log(`${n} is positive`)
}
else if (n<0) {
    console.log(`${n} is positive`)
}
 else {
    console.log("It is zero")
}


let age = 18;
if (age>=18) {
    console.log("Eligible to vote")
} else {
    console.log("Not eligible to vote")
}

// Activity - 2
let a = 15;
let b=7;
let c =26;

if (a>b && a>c) {
    console.log(`${a} is greater than ${b}`)
}

else if (b>a  && b>c) {
    console.log(`${b} is greater than ${c}`)
}
else {
    console.log(`${c} is greater than ${a} and ${b}`)
}

//Activity  - 3
let date = 3;

switch (date) {
    case 1:
        day="Monday"
        break;
    case 2:
        day="Tuesday"
        break;
    case 3:
        day="Wednesday"
        break;
    case 4:
        day="Thursday"
        break;
    case 5:
        day="Friday"
        break;
    case 6:
        day="Saturday"
        break;
    case 7:
        day="Sunday"
        break;

    default: 
    day = "invalid day";
        break;
}

console.log(day)


let grade = 'A'; 
let g; 

switch (grade) {
    case 'A':
        g = "90-100%";
        break;
    case 'B':
        g = "80-90%";
        break;
    case 'C':
        g = "70-80%";
        break;
    case 'D':
        g = "60-70%";
        break;
    case 'E':
        g = "50-60%";
        break;
    case 'F':
        g = "Failed";
        break;
    default: 
        g = "invalid grade";
        break;
}

console.log(g); 

// Activity 4

let oddEven = (n%2==0)?console.log(`${n} is even`) : console.log(`${n} is odd`)

// Activity 5

let year = 2028;
if (year%4 == 0 && year % 100 != 0) {
    console.log("its a Leap year")
}
else {
    console.log("it's not a leap year")
}