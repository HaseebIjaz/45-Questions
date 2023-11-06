"use strict";
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//Browser Javascript
function printPersonalMessage() {
    var _a;
    let name = (_a = prompt("Whats your name ? ")) !== null && _a !== void 0 ? _a : "unknown";
    console.log(`Hello ${name}, would you like to learn some Python today?`);
    console.log("Second attempt :");
    let input = prompt("Whats your name ? ");
    if (typeof input === "string") {
        name = input;
    }
    else {
        name = "unknown";
    }
    console.log(`Your name is : ${name}`);
}
printPersonalMessage();
//Nodejs Javascript
