// Summary

// Objects are associative arrays with several special features.

// They store properties (key-value pairs), where:

// Property keys must be strings or symbols (usually strings).
// Values can be of any type.
// To access a property, we can use:

// The dot notation: obj.property.
// Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
// Additional operators:

// To delete a property: delete obj.prop.
// To check if a property with the given key exists: "key" in obj.
// To iterate over an object: for (let key in obj) loop.

// Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

// All operations via copied references (like adding/removing properties) are performed on the same single object.



let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "pete";

delete user.name;

// Write the code to sum all salaries and store in the variable sum

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for(let key in salaries){
    sum = sum + salaries[key];
}
alert(sum);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width : 200,
    height : 100,
    shape : "rectangle"
};
function multiplyNumeric(obj) {
    for (let key in obj){
        if(typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);


// Functions that are stored in object properties are called “methods”.
// Methods allow objects to “act” like object.doSomething().
// Methods can reference the object as this.
// The value of this is defined at run-time.

// When a function is declared, it may use this, but that this has no value until the function is called.
// A function can be copied between objects.
// When a function is called in the “method” syntax: object.method(), the value of this during the call is object.


// Create an object calculator with three methods:

    // read() prompts for two values and saves them as object properties with names a and b respectively.
    // sum() returns the sum of saved values.
    // mul() multiplies saved values and returns the result.

let calculator = {
    read() {
        this.a = +prompt('a', 0);
        this.b = +prompt('b',0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );