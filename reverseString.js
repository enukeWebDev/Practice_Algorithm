//From FCC
//Reverse a String Algorithm

function reverseString(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

//Other way to solve this problem by leveraging the built-in methods of JS
/*
function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}
*/

//Tests
console.log(reverseString('my name is erick'));
console.log(reverseString('hello'));
console.log(reverseString('philippines'));

