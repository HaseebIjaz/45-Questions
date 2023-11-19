//Author: Haseeb Ijaz
//Current Date : November 8, 2023 

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

function nameCases():void{
    let name = prompt("Whats you name ?") ?? "";
    name = name.trim().toLowerCase();
    console.log(`lower case : ${name}`);
    console.log(`upper case : ${name.toUpperCase()}`);
    console.log(`title case: ${name.split(" ").map((word: string) => {
        return (
            word[0].toUpperCase() + word.slice(1));
        }).join(" ").trim()}`);
}

nameCases();