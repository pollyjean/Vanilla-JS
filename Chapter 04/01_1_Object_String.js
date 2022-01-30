// Object is root object.
// Object, Strong object, Number object, Date object, Arry object, Math object etc.

// Object : setting empty Object
let person = new Object();
// Object member
person.firstName = "John";
person.lastName = "Lennon";
person.age = 70;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person.getFullName());

// String
let txt = "lorem ipsum";
let tln = txt.length; // .length
console.log(tln);
let quo = "May the Force be with you... Always!";
let wrd = quo.indexOf("Force"); // .indexOf (first find position)
console.log(wrd);
let tel = "01000700700";
let dsh = tel.indexOf("-"); // false return is -1
console.log(dsh);
let loc = "This is city of jazz";
let fnd = loc.lastIndexOf("jazz"); // .lastIndexOf (last find position)
console.log(fnd);
let frt = "Apple, Peach, Banana, Pineapple, Mango, Watermelon, Pear";
let fvr = frt.slice(14, 33); // slice start to end
console.log(fvr);
let pnm = "830230-4252354";
console.log(pnm.slice(-7, -6)); // negative slice
console.log(pnm.substring(0, 6)); // substring
console.log(pnm.substring(-6)); // negative substring is not allow.
//console.log(pnm.substr(0, 2)); no more web standard.
console.log(frt.replace("Pineapple", "Ananas")); // replace string
console.log(frt.replace(/BANANA/i, "Orange")); // Use regular expression
console.log(frt.toUpperCase()); // Upper case
console.log(frt.toLowerCase()); // Lower case
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2, "!"); // Concatenating strings (Above 2 more)
let text4 = "Hello" + " " + "World!";
let text5 = "Hello".concat(" ", "World!");
console.log(text3);
console.log(text4);
console.log(text5);
let text6 = "          Hello, New World!      ";
console.log(text6);
console.log(text6.trim()); // Remove Space
let yearOfGundam = "79";
yearOfGundam = yearOfGundam.padStart(4, 0); // add String Front
console.log(yearOfGundam);
let rndNum = "309012";
rndNum = rndNum.padEnd(10, "-"); // add Strong End
console.log(rndNum);
let hi = "HELLO WORLD";
console.log(hi.charAt(6)); // return index value char
console.log(hi.charCodeAt(6)); // return index value char unicode
let birthday = "1920-03-01";
let arr2 = birthday.split("-"); // Split a string an arry based on a delimiter.
console.log(arr2);
let url1 = "http://www.google.com";
let goodSite = url1.startsWith("https");
if (!goodSite) {
  console.log("This site is no good.");
}
let file1 = "abc.png";
let noJpg = file1.endsWith(".png");
console.log(noJpg);
