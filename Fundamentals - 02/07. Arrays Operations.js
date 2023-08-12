// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // push function returns lenght of a array after adding the new elements
console.log(friends);
console.log(newLength); // 4

// Add element to first
const unshiftLen = friends.unshift('John');
console.log(unshiftLen); // 5
console.log(friends);

// Remove elements
friends.pop(); // remove last element
const popped = friends.pop(); // returns removed element
console.log(popped); 
console.log(friends);

friends.shift(); // remove first element
console.log(friends);

console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1, not found

friends.push(23);
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes(23)); // true

if (friends.includes('Steven')) { //true
  console.log('You have a friend called Steven');
}