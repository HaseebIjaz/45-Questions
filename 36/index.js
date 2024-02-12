"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(shirtSize, message) {
    console.log(`The shirt size is ${shirtSize}, and the message printed on the shirt is ${message}`);
}
//array of tuples
const makeShirtArgs = [["Extra Large", "I love Islam"], ["Large", "I love Palestine"], ["Medium", "I love Pakistan"]];
makeShirtArgs.forEach((arg) => {
    make_shirt(...arg);
});
