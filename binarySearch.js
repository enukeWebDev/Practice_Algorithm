//Binary Search Algorithm
/*
Pseudocode (from Khan Academy):
1. Let min = 0 and max = n-1.
2. If max < min, then stop: target is not present in array. Return -1.
3. Compute guess as the average of max and min, rounded down (so that it is an integer).
4. If array[guess] equals target, then stop. You found it! Return guess.
5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
6. Otherwise, the guess was too high. Set max = guess - 1.
7. Go back to step 2.
*/
const binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let arrayIndex = Math.floor((min + max) / 2);
    let guessNum = array[arrayIndex];

    if (target === guessNum) {
      console.log(`The target data is ${target} and it was found after the search...`);
      return true;
    }
    else if (target > guessNum) {
      min = arrayIndex + 1;
    }
    else if (target < guessNum) {
      max = arrayIndex - 1;
    }
  }
  console.log(`The target data is ${target} and it was found after the search...`);
  return false;
};

//Test Code
let finalGrades = [70, 75, 80, 85, 90, 95, 96, 97, 98, 99, 100];
let jerseyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let costcoQueNum = [23, 24, 30, 33, 37, 50, 57, 60];

console.log(binarySearch(finalGrades, 90)); //Return true
console.log(binarySearch(jerseyNumber, 23)); //Return false
console.log(binarySearch(costcoQueNum, 60)); //Return true

// This is also a Binary Search Algorithm (solution from LHL)
// This one will return the index of the target value

/*
// Binary Search Function
function search(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (true) {
    const middleIndex = Math.floor((min + max) / 2.0);
    const currentItem = array[middleIndex];

    if (currentItem === item) {
      // Found it
      return middleIndex;
    } else if (currentItem < item) {
      // Look at the right side
      min = middleIndex + 1;
    } else {
      // Look at the left side
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
  }
}
*/