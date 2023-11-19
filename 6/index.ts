//Author: Haseeb Ijaz
//Current Date : November 8, 2023 

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

function trimPersonName(name:string):string{
    return name.trim();
}
const sampleName:string = "\n\n Haseeb \tIjaz\tSheikh\n\t";
console.log(sampleName);
console.log(trimPersonName(sampleName));