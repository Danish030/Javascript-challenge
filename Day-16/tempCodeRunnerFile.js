function countOccurrences(arr, target) {
//     // Base case: if the array is empty, return 0
//     if (arr.length === 0) {
//         return 0;
//     }

//     // Check if the first element is equal to the target
//     let count = arr[0] === target ? 1 : 0;

//     // Recursively count the occurrences in the rest of the array
//     return count + countOccurrences(arr.slice(1), target);
// }

// // Test the function with a few test cases
// let array = [1, 2, 3, 4, 2, 2, 5, 2];
// console.log(countOccurrences(array, 2)); // Output: 4
// console.log(countOccurrences(array, 3)); // Output: 1
// console.log(countOccurrences(array, 6)); // Output: 0