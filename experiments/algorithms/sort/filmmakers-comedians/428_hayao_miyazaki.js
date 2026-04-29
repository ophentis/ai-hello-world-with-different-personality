#!/usr/bin/env node
// Kiki's Delivery Service: A Gentle Journey of Sorting

const kikisJourney = (scrollOfNumbers) => {
  // Kiki sorts the numbers gently, with care. Each movement is graceful.
  const delivery = scrollOfNumbers.slice();
  const pathLength = delivery.length;

  // With patience and determination, Kiki arranges everything
  for (let flight = 0; flight < pathLength; flight++) {
    for (let destination = 0; destination < pathLength - flight - 1; destination++) {
      if (delivery[destination] > delivery[destination + 1]) {
        const package_temp = delivery[destination];
        delivery[destination] = delivery[destination + 1];
        delivery[destination + 1] = package_temp;
      }
    }
  }

  return delivery;
};

const numberScroll = [82, 43, 10, 27, 38, 3, 9];
const sortedDelivery = kikisJourney(numberScroll);
console.log('[' + sortedDelivery.join(',') + ']');
