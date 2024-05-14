// In JavaScript, the Set object allows you to store unique values of any type, whether primitive values or object references. It provides an efficient way to ensure all elements in the collection are distinct, with no duplicates allowed.

// set takes iterable objects
const set = new Set([1, 2, 3, 4]);

const name = new Set("Rushi");
// output
[
  {
    value: "R",
  },
  {
    value: "u",
  },
  {
    value: "s",
  },
  {
    value: "h",
  },
  {
    value: "i",
  },
];

mySet.add(5); // to add
console.log(mySet.size); // Outputs the number of elements in the Set

// You can check for the presence of an element in a Set using the has() method:
console.log(mySet.has(1)); // Outputs: true
console.log(mySet.has(9)); // Outputs: false

// To remove an element, use the delete() method:
mySet.delete(5); // Removes the element 5

mySet.clear(); // Removes all elements from the Set
