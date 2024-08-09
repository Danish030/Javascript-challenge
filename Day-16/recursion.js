// Activity - task - 1 factorial

// function factorial(n) {
//     //base case
//     if (n===0) {
//         return 1;
//     }
//     //recursive case
//     return n * factorial(n-1);
// }

// console.log(factorial(5));

//task-2 fibonacci series

// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// console.log(fibonacci(8))

// Activity 2 - task -1 recurrsion in array

// let arr = [1,2,3,4,]
// function sumofArr(arr) {
//     // base case
//     if (arr.length === 0) {
//         return 0;
//     }
//     //recursive case
//     return arr[0]+ sumofArr(arr.slice(1))
// }
// console.log(
//     sumofArr(arr));

// let arr = [1,7,6,4,]
// function maxofArr(arr) {
//     // base case
//     if (arr.length === 0) {
//         return 0;
//     }
//     //recursive case
//    let max = maxofArr(arr.slice(1))
//    return arr[0]>max?arr[0] :max
// }
// console.log(maxofArr(arr));

//Activity - 3

// function revesreString(string) {
//     if (string.length === 0 || string.length === 1 ) {
//         return string;
//     }

//     return string.charAt(string.length-1) + revesreString(string.substring(0,string.length-1))
// }
// console.log(revesreString("book"));

// // check palindrome

// function palindromeString(string) {
//     // Base case: if the string is empty or has one character, it's a palindrome
//     if (string.length === 0 || string.length === 1) {
//         return true;
//     }

//     // Check if the first and last characters are the same
//     if (string.charAt(0) === string.charAt(string.length - 1)) {
//         // Recursively check the substring excluding the first and last characters
//         return palindromeString(string.substring(1, string.length - 1));
//     }

//     // If the first and last characters are not the same, it's not a palindrome
//     return false;
// }


// console.log(palindromeString("rtr"));

    
// function binarySearch(arr,target,start,end) {
// // base case
// if (start>end) {
//    return -1; 
// }    
// //middle index
// let mid = Math.floor((start+end)/2);

// // check middle element is target
// if (arr[mid] ===target) {
//     return mid;
// }

// // if the target is smaller than the middle element , search the left half
// if (target<arr[mid]) {
//     return binarySearch(arr,target,start,mid-1);
// }

// return binarySearch(arr,target,mid+1,end)
// }

// let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(binarySearch(sortedArray, 5, 0, sortedArray.length - 1)); // Output: 4
// console.log(binarySearch(sortedArray, 1, 0, sortedArray.length - 1)); // Output: 0
// console.log(binarySearch(sortedArray, 10, 0, sortedArray.length - 1)); // Output: 9
// console.log(binarySearch(sortedArray, 11, 0, sortedArray.length - 1)); // Output: -1

// function countOccurrences(arr, target) {
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

// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }


// function inOrderTraversal(node) {
//     // Base case: if the node is null, return
//     if (node === null) {
//         return;
//     }

//     // Recursively traverse the left subtree
//     inOrderTraversal(node.left);

//     // Visit the current node
//     console.log(node.value);

//     // Recursively traverse the right subtree
//     inOrderTraversal(node.right);
// }

// // Example usage
// let root = new TreeNode(1);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);

// inOrderTraversal(root);
// // Output: 4 2 5 1 6 3 7

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(node) {
    // Base case: if the node is null, return 0
    if (node === null) {
        return 0;
    }

    // Recursively calculate the depth of the left subtree
    let leftDepth = calculateDepth(node.left);

    // Recursively calculate the depth of the right subtree
    let rightDepth = calculateDepth(node.right);

    // The depth of the current node is the maximum of the depths of the left and right subtrees plus 1
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(calculateDepth(root)); // Output: 3