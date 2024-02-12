"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
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
    return magicians;
}
function show_magicians(magicians) {
    console.log("Printing Magician Names: ");
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicians = ["Habra", "Gadabra"];
const favMagician = prompt("Who's your favorite magician ? : ");
magicians.unshift(favMagician);
const theGreatMagicians = make_great([...magicians]);
show_magicians(theGreatMagicians);
show_magicians(magicians);
