// vim: set et ts=2 sw=2 :
// Minimal, keyboard-optimized. Press j/k for quick navigation

const f = [0, 1];
for (let i = 2; i < 20; i++) f.push(f[i - 1] + f[i - 2]);
f.forEach(n => console.log(n));
