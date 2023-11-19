const names: readonly string[] = ["Abubakr", "Umar", "Usman", "Ali"];
const namesMessages: Record<string, string> = {
  Abubakr: "First Caliph",
  Umar: "Second Caliph",
  Usman: "Third Caliph",
  Ali: "Fourth Caliph",
};
names.forEach((name: string) => {
  console.log(`${namesMessages[name]} : ${name}`);
});

enum MyName {
  Haseeb,
  Ijaz,
  Sheikh,
}

const firstNameNum: number = MyName.Haseeb;
console.log(firstNameNum);

const firstNameStr: string = MyName[MyName.Haseeb];
console.log(firstNameStr);

const MyNameMessages: Record<MyName, string> = {
  [MyName.Haseeb]: "First name is ",
  [MyName.Ijaz]: "Middle name is ",
  [MyName.Sheikh]: "Last name is ",
};

console.log(Object.keys(MyName));
Object.keys(MyName)
  .filter((key) => !isNaN(Number(key)))
  .forEach((key: string) => {
    //Type casting number to Enum
    console.log(
      `${MyNameMessages[Number(key) as MyName]} : ${
        MyName[Number(key) as MyName]
      }`
    );
  });

//   console.log("Haseeb" as MyName);
console.log(1 as MyName);
console.log(MyName[1 as MyName]);

// In enum if you type a label like MyName.Haseeb , you get a number
// if you try to access the enum by means of a number or an enum value , you get a string like MyName[1], MyName[MyName.Haseeb

console.log("###############");
console.log(MyName.Ijaz); // Outputs 1
console.log(MyName[MyName.Ijaz]); // Outputs the String Ijaz
console.log(MyName[1]); //Outputs the string Ijaz
console.log(MyName[1 as MyName]); //oUTPUTS Ijaz

//So when you access an enum it provides a way to directly access your enum just like arrays and when you perform an access it outputs a string when using array like syntax like MyName[0]

// When you use dot syntax like MyName.Ijaz
