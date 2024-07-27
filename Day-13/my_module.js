import {add,sub} from './sum.js';
import person  from './object.js';
import {letter,multiply, evens} from './multiple.js';
import _ from 'lodash';
import axios, { Axios } from 'axios';

 const apiURL = 'https://reqres.in/api/users?page=2'
console.log(add(5,4))
console.log(person)
console.log(sub(15,4))
console.log(multiply(5,6))
console.log(letter)
console.log(evens)

axios.get(apiURL)
.then((response) => {
console.log('Data:', response.data);
})
.catch((error) => {
    console.error("Error:", error);
})
.finally(() =>{
    console.log("Requested completed");
})