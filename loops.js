// Summary
// We covered 3 types of loops:

// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.
// To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

// If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

// break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

// Output even numbers in the loop

for (let num = 2; num <= 10; num++) {
    if (num % 2 == 0 ) {
        alert(num);
    }
}

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);


// Output prime numbers

let range = promt("please  enter the max range for prime numbers", 0);
nextPrime:
for (let num = 2; num <= range; num++){
    for(let i = 2; i < num; i++){
        if(num%i == 0) continue nextPrime;
    }
    alert(num);
}