//From FCC
//Truncate a string Algorithm
/*
Pseudocode:
1. Function to take 2 parameters - the string and the number (length) to truncate
2. Place holder for the truckated word
3. Using split to convert the string to an array. This will allow easy access to 
each character of the given string
4. Using slice to truncate the given string (from 0 to number)
5. If the length of the string is equal to the number - return the original string
6. Otherwise, return the truncated word 
*/
const truncateString = (str, num) => {
  let truncatedWord = str.split('').slice(0, num).join('');
  if (str.length === num || num > str.length) {
    return `The string must be the same: ${str}`;
  }
  else
    return `Truncate the given word "${str}" to ${num} character length.\nThe truncated word is: ${truncatedWord}`;
}
//Test Code
let testString1 = 'A-tisket a-tasker A green and yellow basket';
let testString2 = 'A-';
let testString3 = 'Absolutely longer';

console.log(truncateString(testString1, 8));
console.log(truncateString(testString1, 11));
console.log(truncateString(testString1, testString1.length));
console.log(truncateString(testString1, testString1.length + 2));
console.log(truncateString(testString2, 1));
console.log(truncateString(testString3, 2));