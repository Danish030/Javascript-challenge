import _ from 'lodash';

const letter =  "we are using ES6 modules";
console.log(`letter`)


function multiply(a,b) {
    return a*b;
}

let array = [1,2,3,4,5]
var evens = _.remove(array, function(n) {
    return n % 2 == 0;
  });
export {letter,multiply,evens, };