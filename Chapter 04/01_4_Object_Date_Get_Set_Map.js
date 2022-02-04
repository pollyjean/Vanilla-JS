// Date
let nowTime = new Date();
console.log(nowTime);
let theTime = new Date(2022, 0, 11, 10, 21, 20, 0);
console.log(theTime);
let oldTime = new Date(0);
console.log(oldTime);
let oldTime2 = new Date(10000000000);
console.log(oldTime2);
let theTime2 = new Date("2022 2 22 22:22:22");
console.log(theTime2);
let thisDay = new Date().getDate();
console.log(thisDay);
console.log(Date.now());
theTime.setHours(5);
console.log(theTime);

//Set object : unique value array
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet.size);
console.log(mySet.has(1));
mySet.delete(2);
console.log(mySet.has(2));
mySet.clear();
console.log(mySet.size);
mySet.add("my");
mySet.add("name");
mySet.add("is");
mySet.add("is");
// => called 'fat arrow' functions (ES6)
mySet.forEach((item) => {
  console.log(item);
});

//Map object : key(any type) + value , sequential, size property
let userMap = new Map();
userMap.set("age", 21);
userMap.set("email", "dear@email.com");
userMap.set("name", "Kim");
console.log(userMap);
console.log(userMap.get("age"));
console.log(userMap.has("email"));
userMap.delete("email");
console.log(userMap.has("email"));
userMap.clear();
console.log(userMap.size);
userMap.set("age", 17);
userMap.set("email", "left@right");
userMap.set("name", "say the name");
userMap.forEach((item) => {
  console.log(item);
});
