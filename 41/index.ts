// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians:string[]):void{
    console.log("Printing Magician Names: ");
    for(let magician of magicians){
        console.log(magician);
    }
}
const magicians: string[] = ["Habra", "Gadabra"];

show_magicians(magicians);