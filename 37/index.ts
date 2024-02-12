// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(shirtSize:string = "large", message:string = "I love ts"):void{
    console.log(`The shirt size is ${shirtSize}, and the message printed on the shirt is ${message}`);
}
make_shirt("large");
make_shirt("medium");
make_shirt("small","You also love ts");