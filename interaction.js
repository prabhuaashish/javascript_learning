// Summary
// We covered 3 browser-specific functions to interact with visitors:

// alert
// shows a message.
// prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
// All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

// There are two limitations shared by all the methods above:

// The exact location of the modal window is determined by the browser. Usually, it’s in the center.
// The exact look of the window also depends on the browser. We can’t modify it.


// Create a web-page that asks for a name and outputs it.

let name = prompt("What's your name?", "");
alert(name);