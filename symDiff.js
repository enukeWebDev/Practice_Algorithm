/*
FCC
The mathematical term symmetric difference (△ or ⊕) of 
two sets is the set of elements which are in either of 
the two sets but not in both. For example, for sets 
A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means 
it operates on only two elements. So to evaluate an 
expression involving symmetric differences among three 
elements (A △ B △ C), you must complete one operation at a 
time. Thus, for sets A and B above, and C = {2, 3}, 
A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns 
an array of their symmetric difference. The returned array 
must contain only unique values (no duplicates).
*/


function sym(args) {

  //Slice all arguments into a single array
  let newArgs = [].slice.call(arguments);
  //console.log(newArgs);

  //Callback function that will be use for reduce method
  const symDiff = (arr1, arr2) => {

    let newArr = [];

    arr1.forEach((item) => {
      if (arr2.indexOf(item) < 0 && newArr.indexOf(item) < 0) {
        newArr.push(item);
      }
    })

    arr2.forEach((item) => {
      if (arr1.indexOf(item) < 0 && newArr.indexOf(item) < 0) {
        newArr.push(item);
      }
    })
    return newArr;
  }
  return newArgs.reduce(symDiff);

}

//Test Code
console.log(sym([1, 2, 3], [5, 2, 1, 4])); //Output - [3,4,5]
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4])); //Output - [3,4,5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); //Output - [1,4,5]
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])); //Output - [2,3,4,6,7]