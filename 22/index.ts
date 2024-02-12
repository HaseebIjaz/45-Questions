// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const countries:string[] = ["Pakistan", "Saudia", "Iran", "Palestine", "Yemen"];

//Intentional Error: console.log(countries[10])
console.log("Intentional Error: console.log(countries[10])");
console.log("Error Correction: console.log(countries[countries.length - 1])");
