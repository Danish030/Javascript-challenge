// Activity - 1
for (let i = 1; i <= 10; i++) {
    let num = console.log(i)
}

for (let i = 1; i <= 10; i++) {
    let table = console.log(`5 * ${i} = `, 5 *i)

}

// Activity 2

let sum = 0;
let i = 1
while (i<=10) {
    sum+= i;
    i++
}
console.log(sum)

let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}

// Activity 3
let n=1;
do {
    console.log(n)
    n++
} while (n<=5);

// factorial
let fact = 5;
let res = 1;
do {
  res *= fact;
  fact--;
} while (fact > 0);
console.log(res);

// Activity 4
for (let row = 1; row <= 5; row++) {
  // outer loop for row
  let star = "";
  for (let col = 1; col <= row; col++) {
    // for printing star
    star += "*";
  }
  console.log(star);
}

//Activity 5 
for (let int = 1; int <=10; int++) {
    if(int == 5) {continue}
     console.log(int)
}
for (let int = 1; int <=10; int++) {
    if(int == 7) {break}
     console.log(int)
}


