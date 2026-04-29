// Hades judges with calm precision - gnome sort methodical and fair
// Each soul finds its proper place

const shades = [38, 27, 43, 3, 9, 82, 10];
let position = 0;

while (position < shades.length) {
  if (position === 0 || shades[position] >= shades[position - 1]) {
    position++;
  } else {
    [shades[position], shades[position - 1]] = [shades[position - 1], shades[position]];
    position--;
  }
}

console.log('[' + shades.join(',') + ']');
