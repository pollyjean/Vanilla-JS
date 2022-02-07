// Number is wrapper object. Wrap => Primitive Type
let formation = 442;
console.log(typeof formation);
console.log(typeof formation.toString()); // Number To String
console.log(typeof (433).toString());
const pi = 3.14159265359;
console.log(pi.toExponential(2)); // Number To exponent
console.log(pi.toExponential(4));
console.log(pi.toExponential(6));
console.log(pi.toFixed(0)); // Number To fixed point
console.log(pi.toFixed(2));
console.log(pi.toFixed(4));
console.log(pi.toPrecision()); // Number to represent specified precision(rounded)
console.log(pi.toPrecision(2));
console.log(pi.toPrecision(4));
console.log(parseInt(pi)); // Global Function. Return Integer
console.log(typeof parseInt("30 years")); // String number to Number
console.log(parseInt("Year 1")); // Not a Number
console.log(parseFloat(pi)); // Global Function. Return float number
console.log(typeof parseFloat("1.414"));
console.log(Number.MAX_VALUE); // Property Value
console.log(Number.MIN_VALUE); // Property Value
console.log(Number.POSITIVE_INFINITY); // Property Value
console.log(Number.NEGATIVE_INFINITY); // Property Value
console.log(Number.NaN); // Property Value
