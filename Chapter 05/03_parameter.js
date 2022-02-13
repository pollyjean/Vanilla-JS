//Default function parameter (AS IS => TO BE)
// function say(message) {
//   if (message != undefined) {
//     console.log(message);
//   } else {
//     console.log("no parameter");
//   }
// }

function say(message = "no parameter") {
  console.log(message);
}
say();

//Rest Parameter
//old
function sum(x1, x2) {
  let total = x1 + x2;
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6));

//new
function sum2(...args) {
  let total = 0;
  for (const x of args) {
    total += x;
  }
  return total;
}

console.log(sum2(1, 3, 5, 23));
console.log(sum2(4, 2));

//arrow function
const sayHello = (name) => {
  return "Hello " + name;
};
const sayHello2 = (name) => "Hello " + name;

console.log(sayHello2("Everyone"));

//Template Literals
function genHello(name) {
  let name2 = "Lee";
  console.log(`Hello ${name2}. Welcome ${name}`);
}

genHello("Dude");

//Object literal syntax extension
let firstName = "Taiji";
let lastName = "Seo";
let fullName = {
  firstName: firstName,
  lastName: lastName,
};
console.log(fullName);
let type = "singer";
let artist = {
  [type]: "Seo Taiji",
  age: 20,
};
console.log(artist);

//Spread Operator
let numbers1 = "5678";
let numbers2 = [1, 2, 3, 4];
let numbers3 = [...numbers2, ...numbers1];
console.log(numbers3);

// Object Destructuring
function getPersonal() {
  return {
    fName: "Taiji",
    lName: "Seo",
    age: 17,
    email: "ceo@seotaijicompany.com",
    city: "Seoul",
    country: "Korea",
  };
}

let { fName, lName } = getPersonal();
console.log(fName);

function displayName({ fName, lName }) {
  console.log(`${lName} ${fName}`);
}

displayName(getPersonal());

// Array Destructuring
function getScores() {
  return [90, 65, 73, 89, 33, 52];
}
// let [x, y, z] = getScores();
let [x, y, ...args] = getScores();
console.log(y);
console.log(args[1]);
function getProfile() {
  return [17, "Junior", ["HTML", "React", "Svelte"]];
}

let [age, position, [...likes]] = getProfile();
console.log(likes);
