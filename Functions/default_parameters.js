const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 200 * numPassengers // use numPassengers after declaring, coz js store in order
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH432");
createBooking("FH123", 3, 300);
createBooking("FH123", undefined, 400); // to skip one argument we use undefined (same as not passing)
