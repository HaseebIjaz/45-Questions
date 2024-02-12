// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// • Tests for equality and inequality with strings
let str1 = "name";
let str2 = "Name";
console.log('name === Name :',  str1 === str2);

// • Tests using the lower case function

console.log('name.toLowerCase() === Name.toLowerCae() :',  str1.toLowerCase() === str2.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1: number = 4;
const num2: number = 5
console.log("num1 <= num2 :", num1 <= num2);
console.log("num1 === num2 :", num1 === num2);


// • Tests using "and" and "or" operators
console.log("true &&  false : ", true && false);

// • Test whether an item is in a array
console.log("Array.isArray([1,2,3]) : " ,Array.isArray([1,2,3]));

// • Test whether an item is not in a array
console.log("!Array.isArray([1,2,3] : ",!Array.isArray([1,2,3]));