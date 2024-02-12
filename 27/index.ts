// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let alienColor4: string = "green"; 

if(alienColor4 === "green"){
    console.log("the player earned 5 points");
}else if(alienColor4 === "yellow"){
    console.log("the player earned 10 points");
}else if(alienColor4 === "red"){
    console.log("the player earned 15 points");
}

alienColor4 = "yellow"; 

if(alienColor4 === "green"){
    console.log("the player earned 5 points");
}else if(alienColor4 === "yellow"){
    console.log("the player earned 10 points");
}else if(alienColor4 === "red"){
    console.log("the player earned 15 points");
}

alienColor4 = "red"; 

if(alienColor4 === "green"){
    console.log("the player earned 5 points");
}else if(alienColor4 === "yellow"){
    console.log("the player earned 10 points");
}else if(alienColor4 === "red"){
    console.log("the player earned 15 points");
}