//Window is global object
// alert("alert is alert");

// if (confirm("Is it true?")) {
// console.log("yes");
// } else {
// console.log("no");
// }

// let pwd = prompt("Input Password");

// if (pwd == null) {
// console.log("No password");
// } else if (pwd == "") {
// console.log("Password is Empty ");
// } else {
// console.log("Password is " + pwd);
// }

let lazyTime;

function myFunc() {
  lazyTime = setTimeout(() => {
    window.open("https://www.google.com");
  }, 5000);
}

function stopFunc() {
  clearTimeout(lazyTime);
}

let i = 0;
let repeatGo = setInterval(() => {
  console.log("3초마다 프로그램 실행 - " + i);
  if (i == 3) {
    clearInterval(repeatGo);
  }
  i++;
}, 3000);

//Symbol is basic data type
// unique symbol
let person = {
  firstName: "Steve",
  lastName: "Jobs",
};
let getFullName = Symbol("getFullName");
console.log(getFullName);
person[getFullName] = function () {
  return this.firstName + " " + this.lastName;
};
for (const key in person) {
  console.log(key);
}
console.log(person[getFullName]());
