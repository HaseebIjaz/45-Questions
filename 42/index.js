"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function make_great(magicians) {
    for (let i = 0; i < magicians.length; ++i) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    console.log("Printing Magician Names: ");
    for (let magician of magicians) {
        console.log(magician);
    }
}
prompt("Tell me the name of your fav magician ? :  ");
const magicians = ["Habra", "Gadabra"];
make_great(magicians);
show_magicians(magicians);
