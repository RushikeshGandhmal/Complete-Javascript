// Type Conversion and Coercion

// type conversion (manually have to convert)
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991, "1991"
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Jonas')); // Nan (It is a number but an invalid number)
console.log(typeof NaN); // number

console.log(String(23), 23);

// type coercion (automatically done by Js)
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);