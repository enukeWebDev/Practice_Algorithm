//Binary Search Algorithm

const binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let arrayIndex = Math.floor((min + max) / 2);
    let guessNum = array[arrayIndex];

    if (target === guessNum) {
      //return guessNum;
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