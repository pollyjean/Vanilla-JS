//Math
console.log(Math.round(6.969));
console.log(Math.round(170.1));
console.log(Math.round(-4.6));
console.log(Math.ceil(6.969));
console.log(Math.ceil(170.1));
console.log(Math.ceil(-4.6));
console.log(Math.floor(6.969));
console.log(Math.floor(170.1));
console.log(Math.floor(-4.6));
console.log(Math.trunc(6.969));
console.log(Math.trunc(170.1));
console.log(Math.trunc(-4.6));
console.log(Math.sign(6.969));
console.log(Math.sign(170.1));
console.log(Math.sign(-4.6));

console.log(Math.pow(12, 2));
console.log(Math.sqrt(2));
console.log(Math.abs(-4.6));

console.log(Math.min(-10, 9, 0, 21, 53, -3.4));
console.log(Math.max(-10, 9, 0, 21, 53, -3.4));

console.log(Math.random());
console.log(Math.floor(Math.random() * 101));
/**
 * generate random number
 * @param {number} min
 * @param {number} max
 * @returns Random number
 */
function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRndInt(5, 71));

//JSON
