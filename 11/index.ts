// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const names: string[] = ["Haseeb", "Ijaz", "Sheikh"];
names.forEach(((name: string) => {
    console.log(name)
}))

names[0] = "H.";
for(const name of names){
    console.log(name);
}

const namesReadonly: readonly string[] = ["Ustad", "Ehsan", "Navak"];
for (const name of namesReadonly){
    console.log(name);
} 
// namesReadonly[0] = "Sir"; Gives Error
