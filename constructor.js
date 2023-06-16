        // Summary
// Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
// Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
// We can use constructor functions to make multiple similar objects.

function Accumulator(num) {
    this.value = num;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);