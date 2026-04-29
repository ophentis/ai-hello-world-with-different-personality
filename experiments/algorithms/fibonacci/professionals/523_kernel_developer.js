// Kernel developer: constant-time array allocation, tight memory loop
function fib_prealloc(n) {
  const buf = new Array(n);
  buf[0] = 0;
  buf[1] = 1;

  for (let i = 2; i < n; i++) {
    buf[i] = buf[i - 1] + buf[i - 2];
  }

  return buf;
}

const sequence = fib_prealloc(20);
for (let i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
