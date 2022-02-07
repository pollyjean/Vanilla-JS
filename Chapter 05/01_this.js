//this (Window object)
console.log(this);
function myFunc() {
  console.log(this);
}

myFunc();

// this (Object)
let person = {
  fName: "Sora",
  lName: "Lee",
  fullName: function () {
    return this.fName + " " + this.lName;
  },
};

console.log(person.fullName());
