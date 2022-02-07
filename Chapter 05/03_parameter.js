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
