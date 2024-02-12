// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


import promptSync from 'prompt-sync';
const prompt = promptSync();

function make_sandwich(...ingredients:string[]):void{
    console.log("The Sandwich has the following ingredients: ");
    for(let ingredient of ingredients){
        console.log(`Tasty Ingredient : ${ingredient}` );
    }
}
const favIng = prompt("Hi, input your favorite ingredient ? : ");

make_sandwich(favIng, "Pita Bread", "Black Olives", "White Sauce", "Chadder Cheese", "Chicken");
