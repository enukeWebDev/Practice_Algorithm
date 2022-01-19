//From FCC
//Factorial Algorithm
/*
Pseudocode:
1. Factorial (in Mathematics) is the product of all positive 
   integers less than or equal to a given positive integer
   Formula: n! = n x (n - 1)
2. Factorial 0 & 1 is equal to 1 
3. Placeholder to hold the product of the given number - initialize to 1 
4. A 'for loop' - iterate, multiply, assign 
5. Loop will start at 2 because placeholder for product was initialize to 1 already
6. Return the product (which is the Factorial)
7. Will also use recursion as another solution to solve this problem 
*/

const factorial = num => {
  let prod = 1;
  for (let i = 2; i <= num; i++) {
    prod *= i;
  }
  return prod;
}

//Using Recursion - tested and works fine
/*
const factorial = num => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
*/

//Tests
console.log(`The factorial of the given number is:`)
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(20));
console.log(factorial(0));
console.log(factorial(1));
