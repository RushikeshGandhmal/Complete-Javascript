// In JavaScript, call and apply are methods used to invoke functions, and they allow you to specify the this context within which the function is executed.

// Call method
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // Output: Hello, Alice!

// Apply method
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person1 = { name: "Alice" };

greet.apply(person1, ["Hello", "!"]); // Output: Hello, Alice!

// Differences:
// call requires the arguments to be listed individually.
// apply requires the arguments to be provided as an array.
