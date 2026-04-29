#!/usr/bin/env node
// Casino: The House Always Sorts the Numbers

const casinoFloor = (cardsOnTheTable) => {
  // Listen, in this business, you gotta know how to count. You gotta know how to organize.
  // Otherwise, you're nothing. You're nobody.

  const deck = cardsOnTheTable.slice();
  let dealsNeeded = true;

  while (dealsNeeded) {
    dealsNeeded = false;

    for (let hand = 0; hand < deck.length - 1; hand++) {
      // One number's bigger than the other. You gotta move it.
      if (deck[hand] > deck[hand + 1]) {
        const chip = deck[hand];
        deck[hand] = deck[hand + 1];
        deck[hand + 1] = chip;
        dealsNeeded = true;
      }
    }
  }

  return deck;
};

const tableCards = [82, 43, 10, 27, 38, 3, 9];
const sortedHand = casinoFloor(tableCards);
console.log('[' + sortedHand.join(',') + ']');
