// Filename: complexCode.js

/**
 * This code is an implementation of a complex sorting algorithm called
 * "merge sort" which sorts an array of numbers in ascending order. It
 * involves the process of dividing the input array into two halves,
 * recursively sorting the two halves, and then merging the sorted
 * halves to produce the final sorted array.
 */

// Function to merge two sorted arrays
function merge(left, right) {
  let result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

// Recursive merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

// Usage
const arrayToSort = [9, 4, 7, 2, 1, 5, 8, 3, 6];
const sortedArray = mergeSort(arrayToSort);

console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Additional code (optional)
function displayArray(arr) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += arr[i] + " ";
  }
  console.log(output.trim());
}

console.log("Original array:");
displayArray(arrayToSort); // Output: 9 4 7 2 1 5 8 3 6

console.log("Sorted array:");
displayArray(sortedArray); // Output: 1 2 3 4 5 6 7 8 9
