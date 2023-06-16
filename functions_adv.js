// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
alert( sumTo(100) );

// Write a function fib(n) that returns the n-th Fibonacci number.
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}
  
alert( fib(85) );
// The loop starts with i=3, because the first and the second sequence values are hard-coded into variables a=1, b=1.

// Arrow functions
    // Do not have this
    // Do not have arguments
    // Can’t be called with new