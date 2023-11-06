// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

function getQuoteAndAuthor(author:string, quote:string):string{
    return `${author} once said, "${quote}"`;
}

const author:string = "Albert Einstein";
const quote: string = "A person who never made a mistake never tried anything new.";
console.log(getQuoteAndAuthor(author, quote));