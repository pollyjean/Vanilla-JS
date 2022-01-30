/**
 * Operation Calculator : Function (In any order)
 * @param {number} n1
 * @param {number} n2
 * @param {string} operator
 * @returns Operation Results
 */
function calc(n1, n2, operator) {
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
  }
}

let calc1 = calc(1.5, 3.6, "+");
let calc2 = calc(3, 5, "-");
let calc3 = calc(5, 6, "*");
let calc4 = calc(7, 2, "/");
console.log(calc1);
console.log(calc2);
console.log(calc3);
console.log(calc4);

// let sum1 = sum(1, 2, 3);
// let sum2 = sum(9, 8, 7);
/**
 * Sum Function : Function Expression (In order)
 * @param {number} p1
 * @param {number} p2
 * @param {number} p3
 * @returns Summery
 */
// let sum = function (p1, p2, p3) {
//   return p1 + p2 + p3;
// };

// Constructor Function
let plus = new Function("p1", "p2", "return p1 + p2");
let plus1 = plus(63, 12);
let plus2 = plus(13, 14);
console.log(plus1);
console.log(plus2);

// Code recycling
// Maintenance convenience
// Improve code readability
// Improve code quality and ensure reliability

function calcTax(salesPrice) {
  let vat = 0.09;
  let tax = salesPrice * vat;
  return tax;
}
console.log(calcTax(2000));
