// Summary
// A function declaration looks like this:

    // function name(parameters, delimited, by, comma) {
    //   /* code */
    // }
// Values passed to a function as parameters are copied to its local variables.
// A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
// A function can return a value. If it doesn’t, then its result is undefined.
// To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

// It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

// Function naming:

    // A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
    // A function is an action, so function names are usually verbal.
    // There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.

// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.
// In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.


Tasks
// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a,b) {
    if(a<b){
        return a;
    }else {
        return b;
    }
}

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }



// Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

// Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
// With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.

