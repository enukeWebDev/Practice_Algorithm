//From LHL
//Repeating Numbers Algorithm

/*
Pseudocode:
1. The input array for this exercise will be two 
dimensional array (an array of arrays), where 
each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be 
the amount of times to repeat that value.

2. A placeholder for the element that will be repeated and
for the final array (result).

3. Nested for loop to iterate in the given array - outer loop
will iterate on the first element of each sub-array and
the inner loop will iterate on the second element of each
sub-array.

4. The first element will be assign to the numToRepeat
placeholder repeatedly until the inner loop test is false.

5. Then push to finalArray placeholder before it loops over 
to the next sub-array.

6. Finally, join using ',' to concatenate each number repeated
from each sub-arrays.
*/

const repeatNumbers = function(array) {
  let numToRepeat = ' ';
  let finalArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i][1]; j++) {
      numToRepeat += array[i][0];
    }
    finalArray.push(numToRepeat);
    numToRepeat = ' ';
  }
  return finalArray.join(',');

};

//Test Codes
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


/*
Output:

1111111111
11, 222
10101010, 343434343434, 9292
*/
