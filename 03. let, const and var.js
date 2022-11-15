////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

/*
Difference between var a& let.

The var statement is alright, but there are better alternatives. The problem with var is that it's not block-scoped, which means that variables declared with var can be accessed outside of the block, in which they were declared, for example,

for (var i = 0; i < 5; i++) {
  console.log(i);
}
 
console.log(i);
The i variable declared for the 'for' loop can be accessed outside of the for loop, which would be impossible if the variable would be declared with the let statement

for (let i = 0; i < 5; i++) {
  console.log(i);
}
 
console.log(i); // error
Block-scope variables don't pollute the scope as much as variables declared wth var */