const airplane = "TAP Air Portugal";
const plane = "T320";

console.log(plane[0]); // T
console.log(airplane.charAt(0)); // T
console.log("ABC"[0]); // A

console.log(airplane.length); // 16
console.log(airplane.indexOf("A")); // 1
console.log(airplane.lastIndexOf("A")); // 4

console.log(airplane.slice(4, 7)); // Air
console.log(airplane.slice(airplane.lastIndexOf(" ") + 1));
console.log(airplane.split(" "));
