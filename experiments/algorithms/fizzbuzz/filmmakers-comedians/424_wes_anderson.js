#!/usr/bin/env node
// The FizzBuzz Hotel: A Symmetrically Composed Narrative

const fizzBuzzHotel = {
  guestCount: 100,
  roomNumbers: [],

  createSymmetricalNarrative() {
    for (let roomNumber = 1; roomNumber <= this.guestCount; roomNumber++) {
      let guestName = '';

      if (roomNumber % 3 === 0) {
        guestName += 'Fizz';
      }
      if (roomNumber % 5 === 0) {
        guestName += 'Buzz';
      }
      if (guestName === '') {
        guestName = String(roomNumber);
      }

      this.roomNumbers.push(guestName);
    }

    this.roomNumbers.forEach((guest) => {
      console.log(guest);
    });
  }
};

fizzBuzzHotel.createSymmetricalNarrative();
