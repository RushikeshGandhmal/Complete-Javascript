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

console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());

let passenger = "ruShi";
passenger =
  passenger.toLowerCase()[0].toUpperCase() + passenger.toLowerCase().slice(1);
console.log(passenger); // Rushi

const priceGB = "28,8,97£";
const priceUS = priceGB.replaceAll(",", ".").replace("£", "$"); // replace doesn't mutate original string
console.log(priceUS);

const planeName = "A320neo";
console.log(planeName.includes("A320")); // true
console.log(planeName.startsWith("A")); // true
console.log(planeName.endsWith("o")); // true
