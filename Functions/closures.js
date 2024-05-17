function secureBooking() {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
}

const book = secureBooking();
book(); // 1 passengers
book(); // 2 passengers
