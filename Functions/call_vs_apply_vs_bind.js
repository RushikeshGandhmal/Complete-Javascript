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

// Bind method:

// Binding this Context
const person2 = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const unboundGetFullName = person2.getFullName;
console.log(unboundGetFullName()); // undefined undefined (because `this` is not bound)

const boundGetFullName = person2.getFullName.bind(person2);
console.log(boundGetFullName()); // John Doe

// Prepending Arguments
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.user + punctuation);
}

const user = {
  user: "Jane",
};

const boundGreet = greet.bind(user, "Hello");
boundGreet("!"); // Hello, Jane!

// Using bind with Event Listeners
class Button {
  constructor() {
    this.count = 0;
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.count += 1;
    console.log(this.count);
  }

  attachEvent() {
    document.querySelector("button").addEventListener("click", this.increment);
  }
}

const button = new Button();
button.attachEvent();

// In this example, the increment method is bound to the Button instance, ensuring that this always refers to the correct instance when the method is called as an event handler.
