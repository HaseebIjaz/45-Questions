// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

import promptSync from 'prompt-sync';
const prompt = promptSync();

function make_great(magicians:string[]): void{
    for(let i = 0; i< magicians.length; ++i){
        magicians[i] = magicians[i] + " the Great";
    }
}

function show_magicians(magicians:string[]):void{
    console.log("Printing Magician Names: ");
    for(let magician of magicians){
        console.log(magician);
    }
}

const favMagician = prompt("Tell me the name of your fav magician ? :  ");

const magicians: string[] = ["Habra", "Gadabra"];
magicians.unshift(favMagician);

make_great(magicians);
show_magicians(magicians);