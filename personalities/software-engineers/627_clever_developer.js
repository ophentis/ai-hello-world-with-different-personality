// Clever dev: obscure JavaScript tricks

// Using bitwise NOT to convert string to number (clever but why?)
const msg = String.fromCharCode(...[0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x57, 0x6f, 0x72, 0x6c, 0x64]);
console.log(msg);

// Bonus: Another approach using reduce and bit shifting
const greeting = [8, 5, 12, 12, 15, 32, 23, 15, 18, 12, 4].reduce((acc, n) =>
  acc + String.fromCharCode(n + 64),
'');

// Or via IIFE with recursive char codes
(function print(str = [72,101,108,108,111,32,87,111,114,108,100]) {
  console.log(String.fromCharCode(...str));
})();
