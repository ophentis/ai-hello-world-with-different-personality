// Bruce Lee - "Be Water" philosophy in sorting
// Flow with the problem, adapt to the form
const elements = [38, 27, 43, 3, 9, 82, 10];

// Minimum element selection - like water finding its path
for (let mind = 0; mind < elements.length; mind++) {
  let focused_position = mind;

  for (let spirit = mind + 1; spirit < elements.length; spirit++) {
    if (elements[spirit] < elements[focused_position]) {
      focused_position = spirit;
    }
  }

  const empty_hand = elements[mind];
  elements[mind] = elements[focused_position];
  elements[focused_position] = empty_hand;
}

console.log('[' + elements.join(',') + ']');
