#!/usr/bin/env node
// Kernel Developer: Hello World via memory management and process control
// Low-level systems thinking - understanding the machine

const PAGE_SIZE = 4096;
const PROCESS_ID = process.pid;
const MEMORY_SEGMENTS = {
  text: 0x400000,     // Code segment
  data: 0x601000,     // Initialized data
  bss: 0x602000,      // Uninitialized data (Block Started by Symbol)
  heap: 0x1000000,    // Dynamic allocation
  stack: 0x7ffffffde000 // Stack (grows downward)
};

// Simulate syscall interface
function syscall(name, ...args) {
  const calls = {
    'write': () => `[SYSCALL:1] write() - fd=${args[0]} len=${args[2]}`,
    'mmap': () => `[SYSCALL:9] mmap() - addr=0x${args[0].toString(16)} size=${args[1]}`,
    'exit': () => `[SYSCALL:60] exit_group() - code=${args[0]}`
  };
  return calls[name] ? calls[name]() : null;
}

console.log('=== Linux Kernel Process Context ===');
console.log(`PID: ${PROCESS_ID} (decimal: ${PROCESS_ID})`);
console.log(`Page Size: ${PAGE_SIZE} bytes`);
console.log('\nMemory Layout (Virtual Address Space):');
Object.entries(MEMORY_SEGMENTS).forEach(([seg, addr]) => {
  console.log(`  ${seg.toUpperCase().padEnd(6)}: 0x${addr.toString(16)}`);
});

console.log('\nContext Switch - Executing write syscall:');
console.log(syscall('write', 1, 'Hello World from kernel space', 30));

console.log('\n✓ Process terminating normally');
console.log(syscall('exit', 0));
