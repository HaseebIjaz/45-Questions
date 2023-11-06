"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
function nameCases() {
    var _a;
    let name = (_a = prompt("Whats you name ?")) !== null && _a !== void 0 ? _a : "";
    name = name.trim().toLowerCase();
    console.log(`lower case : ${name}`);
    console.log(`upper case : ${name.toUpperCase()}`);
    console.log(`title case: ${name.split(" ").map((word) => {
        return (word[0].toUpperCase() + word.slice(1));
    }).join(" ").trim()}`);
}
nameCases();
