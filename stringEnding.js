//Merry Christmas - don't skip Algorithm per Day!
//Confirm ending of a string Algorithm
/*
Pseudocode:
1. Placeholder for the ending character/s of the given string.
   - Depends on what the target is (provided as parameter).
   - Actual string length minus the length of the target.
2. Extract the difference of actual string length and the target length.
   - Will use the slice method
3. Another placeholder to hold the extracted string.
   - Is not necessary but for a clear visualization on solving
     this problem, another placeholder is use.
4. 'if / else' statement to test if the extracted string is strictly
   equal to the target.
5. Return true if equal otherwise return false.
*/

const confirmEnding = (str, target) => {
  let newStrLength = str.length - target.length;
  let newStr = str.slice(newStrLength);
  /*
  Using only one placeholder solution

  let newStr = str.slice(str.length - target.length);

  ...then if/else statement here
  */

  if (newStr === target) {
    return true;
  } else
    return false;
}

//Tests
console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Congratulation', 'on'));
console.log(confirmEnding('Connor', 'n'));
console.log(confirmEnding('Walking on water and developing software from a specification are easy if both are frozen', 'specification'));
console.log(confirmEnding('He has to give me a new name', 'name'));
console.log(confirmEnding('Open sesame', 'same'));
console.log(confirmEnding('Open sesame', 'sage'));
console.log(confirmEnding('Abstraction', 'action'));