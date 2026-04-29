#!/usr/bin/env node
// The Grand Budapest Sort: A Symmetrical Journey Through Order

const hotelGrandBudapest = {
  guests: [82, 43, 10, 27, 38, 3, 9],

  sortTheLobbiesAscendingOrder() {
    const workers = this.guests.slice();
    const leftWing = workers.length;

    // Each floor must be organized precisely. Balance. Symmetry.
    for (let floor = 0; floor < leftWing; floor++) {
      for (let position = 0; position < leftWing - floor - 1; position++) {
        if (workers[position] > workers[position + 1]) {
          const temp = workers[position];
          workers[position] = workers[position + 1];
          workers[position + 1] = temp;
        }
      }
    }

    return workers;
  }
};

const orderedGuests = hotelGrandBudapest.sortTheLobbiesAscendingOrder();
console.log('[' + orderedGuests.join(',') + ']');
