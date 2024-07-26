// try{
//     if(2+2 ==5);
//     throw new Error ('Math Error: 2+2does not equal to 5')
// }
// catch (err){
//     console.log(err.message)
// }

// function divide(a,b) {
//     try{
//     if(b == 0){
//         throw new Error("Division by zero is not possinle")
//     }
//     return a/b;
// } catch (err){
// console.log("Error:",err.message)
// }
// }

// divide(2,0)

// // Activity 2
// try{
//     if(2*2 == 4)
//     throw new Error ('Math Error: 2 * 2 does not equal to 5')
// return true;
// }
// catch (err){
//     console.log(err.message)
// }
// finally{
//     console.log("task completed");
// }

// Activity 3
// class CheckCondition extends Error { 
//     constructor(msg) { 
//         super(msg); 
//     } 
// } 
  
// try { 
//     if (10 != 20)  
//         throw new CheckCondition("10 is not equal to 20"); 
// } 
// catch (err) { 
//     console.error(err); 
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message); // Call the parent class's constructor with the message
//         this.name = 'ValidationError'; // Set the error name
//     }
// }

// function validateInput(input) {
//     if (typeof input !== 'string') {
//         throw new ValidationError('Input must be a string.');
//     }
//     if (input.trim() === '') {
//         throw new ValidationError('Input cannot be empty or whitespace.');
//     }
//     // Additional validations can be added here
//     return true; // Return true if validation passes
// }
// function processUserInput(input) {
//     try {
//         validateInput(input); // Validate the input
//         console.log('Input is valid:', input); // Proceed if validation passes
//     } catch (error) {
//         if (error instanceof ValidationError) {
//             console.error('Validation Error:', error.message); // Handle the validation error
//         } else {
//             console.error('Unexpected Error:', error); // Handle unexpected errors
//         }
//     }
// }

// // Example Usage
// processUserInput('Hello, World!'); // Input is valid: Hello, World!
// processUserInput(''); // Validation Error: Input cannot be empty or whitespace.
// processUserInput(123); // Validation Error: Input must be a string.

// Activity 4


    function getRandomOutcome() {
        return new Promise((resolve, reject) => {
            const randomNumber = Math.random();
            console.log(`Generated random number: ${randomNumber.toFixed(2)}`);
    
           
            if (randomNumber > 0.5) {
                resolve('The promise was successfully resolved!');
            } else {
                reject(new Error('The promise was rejected.'));
            }
        });
    }
    
    async function handleRandomOutcome() {
        try {
            const result = await getRandomOutcome();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error.message);
        }
    }
    

    handleRandomOutcome();

    // Activity 5
  
const invalidURL = 'https://example.invalid/api/data';

fetch(invalidURL)
    .then(response => {
        if (!response.ok) {
   
            switch (response.status) {
                case 404:
                    throw new Error('Resource not found (404).');
                case 500:
                    throw new Error('Server error (500).');
                default:
                    throw new Error(`Unexpected response: ${response.statusText} (Code: ${response.status})`);
            }
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {

        console.error('Fetch error:', error.message);

    });


async function fetchDataFromInvalidURL() {
    const invalidURL = 'https://example.invalid/api/data';

    try {
        const response = await fetch(invalidURL);


        if (!response.ok) {
            throw new Error(`Network response was not ok. Status Code: ${response.status}`);
        }

        const data = await response.json(); 
        console.log('Data received:', data);

    } catch (error) {

        console.error('Fetch error:', error.message);
    }
}


fetchDataFromInvalidURL();
