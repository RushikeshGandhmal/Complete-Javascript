const person = {
  firstName: "Rushikesh",
  lastName: "Gandhmal",
  birthYear: 1999,
};

console.log(person);

// get all keys
for (const key of Object.keys(person)) {
  console.log(key);
}
// Output:
/* firstName
lastName
birthYear */

// get all values
for (const value of Object.values(person)) {
  console.log(value);
}
// Output:
/* Rushikesh
Gandhmal
1999 */

// get all keys and value
for (const [key, value] of Object.entries(person)) {
  console.log(`Key: ${key}, Value: ${value}`);
}
// Output:
/* firstName Rushikesh
lastName Gandhmal
birthYear 1999 */
