// const promiseSolve = new Promise((resolve)  => {
// setTimeout(() => {
//     resolve("My promise is resolved after 2 seconds")
// },2000);
// });


// promiseSolve.then((message) => console.log(message));

// const catchError = new Promise((_, rej) => {
//     setTimeout(() => {
//         rej(new Error("catch error"));
//     }, 2000);
// });

// catchError.catch((error) => console.log(error.message));

// // activity 2
// // Simulate a fetch operation
// function fetchData(url) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Data from ${url}`);
//       }, 1000);
//     });
//   }
  
//   // Chain of Promises to fetch data in sequence
//   fetchData("https://api.example.com/data1")
//     .then((data1) => {
//       console.log("Step 1:", data1);
//       return fetchData("https://api.example.com/data2");
//     })
//     .then((data2) => {
//       console.log("Step 2:", data2);
//       return fetchData("https://api.example.com/data3");
//     })
//     .then((data3) => {
//       console.log("Step 3:", data3);
//       return fetchData("https://api.example.com/data4");
//     })
//     .then((data4) => {
//       console.log("Step 4:", data4);
//       // Continue chaining as needed
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
  
    // // Activity 3
    // const fetchres = async function result() {
    //   return new Promise((resolve)=>{
    //     setTimeout(()=>{
    //       resolve("implementation of async await");
    //     }, 1000);
    //   });
    // }

    // async function logResolved() {
    //   try{
    //      const result = await fetchres()
    //      console.log(result);
    //   } catch (error){
    //     console.error("Error:", error);
    //   }
    // }

    // logResolved();

    // const createRejectedPromise = () =>
    //   new Promise((reject) => {
    //     setTimeout(() => {
    //       reject("can't process your request");
    //     }, 2000);
    //   });
    
    // const logReject = async () => {
    //   try {
    //     const result = await createRejectedPromise();
    //     console.log(result);
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };
    
    // logReject();

    // Activity 4 
    
   const apiURL = 'https://reqres.in/api/users?page=2'

  //  // fetch data 
  //  fetch(apiURL)
  //  .then((response) => {
  //   if (!response.ok) {
  //     throw new Error('HTTP error! Status: ${response>status}');
  //   }
  //   return response.json()
  //  })
  //  .then((data) =>{
  //   console.log('Response Data:',data)
  //  })
  //  .catch((error)=>{
  //   console.error('Fetch Error:',error);
  //  })


  // async function fetchdata1(){
  //   try{
  //     const response = await fetch(apiURL)
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     console.log('Response Data:',data);
  //   }catch(error){
  //      console.error('Fetch error:',error);
  //   }
  // }

  // fetchdata1()

  // Activity 5 
// URLs of the API endpoints
const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

// Async function to fetch data from multiple endpoints concurrently
async function fetchMultipleData() {
  try {
    // Create an array of fetch promises
    const fetchPromises = apiUrls.map(url => fetch(url));

    // Wait for all fetch promises to resolve
    const responses = await Promise.all(fetchPromises);

    // Parse each response as JSON concurrently
    const dataPromises = responses.map(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });

    // Wait for all JSON parsing to complete
    const data = await Promise.all(dataPromises);

    // Log the data
    console.log('Response Data:', data);
  } catch (error) {
    console.error('Fetch Error:', error.message);
  }
}

// Call the function
fetchMultipleData();


const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});