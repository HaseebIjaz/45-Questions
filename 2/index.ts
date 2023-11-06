// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//Browser Javascript

function printPersonalMessage () {
    let name: string = prompt("Whats your name ? ") ?? "unknown";
    console.log(`Hello ${name}, would you like to learn some Python today?`)

    console.log("Second attempt :");
    let input: string = prompt("Whats your name ? ") as string;
    if(typeof input === "string"){
        name = input;
    } 
    else{
        name = "unknown";
    }
    console.log(`Your name is : ${name}`);
}

printPersonalMessage();

//Nodejs Javascript

