//Find the longest word length Algorithm
const findLongestWordLength = str => {
  let newStr = str.split(' ');
  let strCount = 0;
  let longestWord = '';
  //console.log(newStr); - use for debugging purpose
  //for of loops is simple & perfect if all element in the array is needed to be looked into
  for (let newSt of newStr) {
    //for (let i = 0; i < newStr.length; i++) - can use a traditional for loops here as well
    if (strCount < newSt.length) {
      strCount = newSt.length;
      longestWord = newSt;
    }
  }
  return `Longest Word: ${longestWord}\nLength: ${strCount}`;
}
//Tests
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));//Output: 6
console.log(findLongestWordLength('Maybe I’m missing something but I tried it as above and did not work.'));//Output: 9
console.log(findLongestWordLength('I would personally recommend the first solution for readability to others.'));//Output: 11