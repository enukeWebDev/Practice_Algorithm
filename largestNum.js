//From FCC
/*
Largest Numbers in Arrays Algorithm
Pseudocode:
1. Need a placeholder for the new array - 
   will contain all the largest numbers 
   from the given arrays, set to empty
2. Placeholder for the element for comparison - set initial value to arr[i][0]
3. Two 'for loop' to iterate in the arrays
4. Outer 'for loop' represents the main array (rows)
5. Inner 'for loop' represents the sub-arrays (columns)
6. 'if statement' to test condition
7. Return the new array with the largest numbers from the given array
*/

const largestOfFour = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largestElem = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestElem) {
        largestElem = arr[i][j];
      }
    }
    newArr[i] = largestElem;
  }
  return newArr;
}

//Tests
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [10000000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));