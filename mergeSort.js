const prompt = require('prompt-sync')();

const str = prompt('Enter list of integers (10, -10, 123, 5): ');
if (str.length < 1) {
  console.log("Unsorted array: []");
  console.log("  Sorted array: []");
} else {
  const arr = str.split(',').map(Number);
  if (arr.every(element => Number.isInteger(element))) {
    console.log("Unsorted array:", arr);
    const sorted = mergeSort(arr);
    console.log("  Sorted array:", sorted);
  } else {
    console.log("Enter just integers separated by commas.");
  }
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
