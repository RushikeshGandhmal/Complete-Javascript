// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

// falsy : they are not exactly false initially but they will become when converted to a boolean.

console.log(Boolean(0));             // false
console.log(Boolean(undefined));     // false
console.log(Boolean('Jonas'));       // true
console.log(Boolean({}));            // true
console.log(Boolean(''));            // false

const money = 100;
if (money) {                         // number variable converts to boolean 
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height;
if (height || height == 0) { // height is undefined so it will convert to false
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}