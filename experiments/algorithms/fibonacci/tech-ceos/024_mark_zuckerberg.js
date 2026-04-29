// Mark Zuckerberg: Ship fast, optimize in v2
let f = [0, 1];
for (let i = 2; i < 20; i++) f.push(f[i-1] + f[i-2]);
f.forEach(n => console.log(n));
