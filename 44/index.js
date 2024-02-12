"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function make_sandwich(...ingredients) {
    console.log("The Sandwich has the following ingredients: ");
    for (let ingredient of ingredients) {
        console.log(`Tasty Ingredient : ${ingredient}`);
    }
}
const favIng = prompt("Hi, input your favorite ingredient ? : ");
make_sandwich(favIng, "Pita Bread", "Black Olives", "White Sauce", "Chadder Cheese", "Chicken");
