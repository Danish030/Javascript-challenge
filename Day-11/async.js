const promiseSolve = new Promise((resolve)  => {
setTimeout(() => {
    resolve("My promise is resolved after 2 seconds")
},2000);
});

promiseSolve.then((message) => console.log(message));

const catchError = new Promise((res) => {
setTimeout(() => {
    res(new Error("catch erorr"));
},2000)
})

catchError.catch((error) => console.log(error.message));

// activity 2
