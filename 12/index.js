"use strict";
const names = ["Abubakr", "Umar", "Usman", "Ali"];
const namesMessages = {
    Abubakr: "First Caliph",
    Umar: "Second Caliph",
    Usman: "Third Caliph",
    Ali: "Fourth Caliph",
};
names.forEach((name) => {
    console.log(`${namesMessages[name]} : ${name}`);
});
var MyName;
(function (MyName) {
    MyName[MyName["Haseeb"] = 0] = "Haseeb";
    MyName[MyName["Ijaz"] = 1] = "Ijaz";
    MyName[MyName["Sheikh"] = 2] = "Sheikh";
})(MyName || (MyName = {}));
const firstNameNum = MyName.Haseeb;
console.log(firstNameNum);
const firstNameStr = MyName[MyName.Haseeb];
console.log(firstNameStr);
const MyNameMessages = {
    [MyName.Haseeb]: "First name is ",
    [MyName.Ijaz]: "Middle name is ",
    [MyName.Sheikh]: "Last name is ",
};
console.log(Object.keys(MyName));
Object.keys(MyName)
    .filter((key) => !isNaN(Number(key)))
    .forEach((key) => {
    //Type casting number to Enum
    console.log(`${MyNameMessages[Number(key)]} : ${MyName[Number(key)]}`);
});
//   console.log("Haseeb" as MyName);
console.log(1);
console.log(MyName[1]);
// In enum if you type a label like MyName.Haseeb , you get a number
// if you try to access the enum by means of a number or an enum value , you get a string like MyName[1], MyName[MyName.Haseeb
console.log("###############");
console.log(MyName.Ijaz); // Outputs 1
console.log(MyName[MyName.Ijaz]); // Outputs the String Ijaz
console.log(MyName[1]); //Outputs the string Ijaz
console.log(MyName[1]); //oUTPUTS Ijaz
