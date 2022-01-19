//From FCC
/*
Pseudocode:
1. A function with parameter - string and number
2. The string is to be repeated how many times (number)
3. Placeholder for the repeated string
4. If the number provided as argument is less than 0, do not repeat the string
5. For loop to iterate and to repeat the string based on the value of the number
6. Return the repeated string
7. Also solve the problem using while loop - works as expected
*/
const repeatStringNumTimes = (str, num) => {
  let repeatedStr = '';
  if (num < 0) {
    return `The ${str} was NOT repeated!`;
  }
  for (let i = 1; i <= num; i++) {
    repeatedStr += str;
  }
  return `The ${str} was repeated ${num} time/s: ${repeatedStr} `;
}

/*
  while (num > 0) {
    repeatedWord += str;
    num--;
  }
  return  repeatedStr;
}
*/

//Tests
console.log(repeatStringNumTimes('* ', 3));
console.log(repeatStringNumTimes('🦊 🦁 🐶 ', 3));
console.log(repeatStringNumTimes('⛹🏼‍♂️ ⛹🏿‍♀️ ', 4));
console.log(repeatStringNumTimes('abc', 1));
console.log(repeatStringNumTimes('🎟 ', 8));
console.log(repeatStringNumTimes('abc', -2));
console.log(repeatStringNumTimes('🍎 ', 1));