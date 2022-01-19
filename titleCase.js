//Title case Algorithm

const titleCase = str => {
  let newStr = str.toLowerCase().split(' ');
  //the string will be converted to lower case the split(will convert to an array)
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    //every element of the array(newStr) and their first element
    //will be converted to upper case then concatenate the rest
    //of the string using slice method.
  }
  return newStr.join(' ');//join method to convert the array back to string
}
console.log(titleCase('I\'m a little tea pot'));
console.log(titleCase('sHoRt AnD sToUt'));
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'));

