"use strict";
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
const names = ["Haseeb", "Ijaz", "Sheikh"];
names.forEach(((name) => {
    console.log(name);
}));
names[0] = "H.";
for (const name of names) {
    console.log(name);
}
const namesReadonly = ["Ustad", "Ehsan", "Navak"];
for (const name of namesReadonly) {
    console.log(name);
}
