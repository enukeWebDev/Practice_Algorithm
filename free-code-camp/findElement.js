//Find element Algorithm
/*
Pseudocode
1. Using array find method - takes array and function as parameters 
2. Use for loop to iterate in the given array
3. Returns the value of the first element in the provided array that 
satisfies the provided testing function. 
4. If no values satisfy the testing function
undefined is returned. 


This is the simplest algorithm to solve this problem but this
is using a built in method. let's also try a for loop - the 
conventional way to solvethis problem.

return arr.find(func);
*/

const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return `The number is: ${arr[i]}`;
    }
  }
  return undefined;
}
//Tests
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 3, 5, 8, 9, 10];
let arr3 = [1, 3, 5, 9];

console.log(findElement(arr1, num => num % 2 === 0));
console.log(findElement(arr2, num => num % 3 === 0));
console.log(findElement(arr3, num => num % 2 === 0));