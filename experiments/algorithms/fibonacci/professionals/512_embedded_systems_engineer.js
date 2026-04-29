// EMBEDDED FIBONACCI: Register-optimized loop
// Flash memory: 512 bytes. RAM: 16 bytes working set.
// Real-time: Deadline met. No malloc calls.

let a = 0;
let b = 1;
let n = 0;

while (n < 20) {
  console.log(a);
  const tmp = a + b;
  a = b;
  b = tmp;
  n++;
}
