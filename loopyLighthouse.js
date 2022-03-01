// From LHL

/*
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) 
that you call with 3 parameters.

range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
The loopyLighthouse function should log to the console all the numbers from 15 to 90, 
except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", 
and multiples of 2 and 5 with "BattyBeacon".

Tips
As this is a big refactor—that is, a restructuring of the code with the purpose of 
improving a non-functional feature, in our case reusability–consider tackling it in steps. 
Start with one of the parameters, test it thoroughly, then add the others one at a 
time while constantly testing until you've solved the whole problem.

*/

const loopyLighthouse = (range, multiples, words) => {

  let startOfRange = range[0];
  let endOfRange = range[1];

  for (let numbers = startOfRange; numbers <= endOfRange; numbers++) {

    if (numbers % multiples[0] === 0 && numbers % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    }

    else if (numbers % multiples[0] === 0) {
      console.log(words[0]);
    }

    else if (numbers % multiples[1] === 0) {
      console.log(words[1]);
    }

    else
      console.log(numbers);
  }
}

// Test Codes
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([1, 20], [2, 5], ["Erick", "Nuque"]);
loopyLighthouse([1, 100], [3, 7], ["Fizz", "Buzz"]);