function closure() {
   let a = "Danish" 
   function innner() {
    return a;
   }
   return innner;
}
const task1 = closure()
console.log(task1());


function counter() {
    let totalCount = 0;
    function increment() {
        return (totalCount+=1);
    }
    return increment;
}

const task2 = counter()
console.log(task2());
console.log(task2());
console.log(task2());

function generateID (){
let uId = Math.floor(Math.random()*9000) +1000;
function increment() {
    return uId++;
}
return increment
}

let task3 = generateID()
console.log(task3());
console.log(task3());
console.log(task3());

function username(user) {
    function greet() {
        return `Welcome ${user}`
    }
    return greet;
}

const task4 = username("Danish")
console.log(task4());

function task5() {
    let fnArr = [];
    function createArray() {
      for (let i = 0; i <= 5; i++) {
        fnArr.push(function () {
          return `Function ${i}`;
        });
      }
    }
    createArray();
    return fnArr;
  }
  
  let testTask5 = task5();
  
  // console.log(testTask5[2]());
  testTask5.forEach((fn) => console.log(fn()));

  function manageItems() {
    let itemCollection = []
    function addItem(item) {
      itemCollection.push(item)
    }
    function removeItem(item) {
      itemCollection = itemCollection.filter((i) => i !== item);
    }

    function listItems() {
      return itemCollection;
    }

    return{
      addItem,
      removeItem,
      listItems,
    };
  }

  const myItems = manageItems();
myItems.addItem("item1");
myItems.addItem("item2");
myItems.addItem("item3");
myItems.addItem("item4");

console.log(myItems.listItems());
myItems.removeItem("item3");
console.log(myItems.listItems());

// Activity
function square(n) {
  return n * n;
}

function memoiz(fn) {
  const cache = {};
  return function (n) {
    if (cache[n] !== undefined) {
      return `get from cache: ${cache[n]}`;
    }
    const res = fn(n);
    cache[n] = res;
    return `Result: ${res}`;
  };
}

const memo = memoiz(square);
console.log(memo(5)); // Result: 25
console.log(memo(5)); // get from cache: 25
  

// Fibonacci function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoization function
function memoiz(fn) {
  const cache = {};
  return function (n) {
    if (cache[n] !== undefined) {
      return `get from cache: ${cache[n]}`;
    }
    const res = fn(n);
    cache[n] = res;
    return `Result: ${res}`;
  };
}

// Memoized Fibonacci function
const memoizedFibonacci = memoiz(fibonacci);

// Test the memoized Fibonacci function
console.log(memoizedFibonacci(10)); // Result: 55
console.log(memoizedFibonacci(10)); // get from cache: 55
console.log(memoizedFibonacci(15)); // Result: 610
console.log(memoizedFibonacci(15)); // get from cache: 610