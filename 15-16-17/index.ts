//15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

const invitedPeople: string[] = [
  "Dr. Israr",
  "Molana Ishaq Madni",
  "Molana Mododi",
];

const nextGuestToInvite: string = "Sahil Adeem";

const notComing: string = invitedPeople.pop() ?? "";

console.log("Fortunately :), he is coming : ", nextGuestToInvite);

invitedPeople.push(nextGuestToInvite);

console.log("New invitation list : ");

for (let gem of invitedPeople) {
  console.log(`We are glad to invite ${gem} to the dinner with us tonight !`);
}

console.log("Unfortunately :( , he wont be able to come : ", notComing);

//16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

console.log("We found a bigger table guys !");

invitedPeople.unshift("Engr. Muhammad Ali Mirza");
console.log(invitedPeople);
invitedPeople.splice(invitedPeople.length / 2, 0, "Sami Hamdi");
invitedPeople.push("Noman Ali Khan");
console.log(invitedPeople);

for (let gem of invitedPeople) {
  console.log(`We are glad to invite ${gem} to the dinner with us tonight !`);
}

//17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log("I can invite only two people for dinner");

const numberOfPeopleToRemove = invitedPeople.length - 2;
for (let i = 0; i < numberOfPeopleToRemove; ++i) {
  const removedPerson = invitedPeople.shift();
  console.log(`${removedPerson}, I am sorry i can’t invite you to dinner.`);
}
console.log(invitedPeople);

invitedPeople.forEach((person) => {
  console.log(`${person}, you are still invited !`);
});

invitedPeople.pop();
invitedPeople.pop();

console.log("Empty list of invited people : ", invitedPeople);
