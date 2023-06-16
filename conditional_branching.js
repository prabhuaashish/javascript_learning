// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let name = prompt("what is the official name of javascript?", "");
if (name == "ECMAScript"){
    console.log('Right');
} else {
    console.log("You don’t know? ECMAScript!");
}

// Using if..else, write the code which gets a number via prompt and then shows in alert

let value = promt("please input a number", 0);
if (value > 0) {
    console.log(1);
} else if (value < 0) {
    console.log(-1);
}else {
    console.log(0);
}

// Rewrite 'if' into '?'
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// this can be written as
let output = (a + b < 4)? "Below": "Over";

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

let login = promt("please enter the login id", '');
if (login === "Admin"){
    let password = promt("Please enter the password","");
    if (password=== "TheMaster"){
        alert("Welcome!");
    }else if ((password === "") || (password === null)){
        alert("Canceled");
    }else{
        alert("Wrong password");
    }
} else if((login === "") || (login === null )) {
    alert('Canceled');
} else {
    alert("I don't know");
}

