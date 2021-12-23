//Factorial Algorithm
function factorial(num) {
  let prod = 1;
  for (let i = 2; i <= num; i++) {
    prod *= i;
  }
  return prod;
}
//Tests
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(20));
console.log(factorial(0));
