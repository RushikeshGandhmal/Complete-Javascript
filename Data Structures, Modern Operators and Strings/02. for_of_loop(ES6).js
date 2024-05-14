// Example 1: Iterating Over an Array
const fruits = ["apple", "banana", "mango", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Output:
// apple
// banana
// mango
// orange

// Example 2: Iterating Over a String
const message = "Hello";

for (const char of message) {
  console.log(char);
}

// Output:
// H
// e
// l
// l
// o

// Example 3: Iterating Over a Map
const userRoles = new Map([
  ["Alice", "Admin"],
  ["Bob", "User"],
  ["Eve", "Moderator"],
]);

for (const [user, role] of userRoles) {
  console.log(`${user}: ${role}`);
}

// Output:
// Alice: Admin
// Bob: User
// Eve: Moderator
