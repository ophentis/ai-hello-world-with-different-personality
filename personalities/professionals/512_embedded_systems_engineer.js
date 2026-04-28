// Embedded Systems Engineer: Low-level memory, registers, interrupts, and hardware control
// =====================================================================================

// Memory-mapped IO simulator - direct register manipulation
class MemoryMappedIO {
  constructor() {
    // Simulating hardware registers at specific memory addresses
    this.registers = new Uint32Array(256);
    this.interruptVector = [];
  }

  // Read/write to register at specific address
  writeRegister(addr, value) {
    this.registers[addr] = value;
    console.log(`[REG WRITE] 0x${addr.toString(16).padStart(4, '0')} = 0x${value.toString(16).padStart(8, '0')}`);
  }

  readRegister(addr) {
    const value = this.registers[addr] || 0;
    const hexValue = value.toString(16).padStart(8, '0');
    console.log(`[REG READ] 0x${addr.toString(16).padStart(4, '0')}: 0x${hexValue}`);
    return value;
  }

  // Interrupt service routine
  registerISR(vectorNum, handler) {
    this.interruptVector[vectorNum] = handler;
    console.log(`[ISR REGISTERED] Vector ${vectorNum}: 0x${handler.toString(16)}`);
  }

  triggerInterrupt(vectorNum) {
    console.log(`[INTERRUPT] Vector ${vectorNum} triggered - CPU context saved`);
    if (this.interruptVector[vectorNum]) {
      console.log(`[ISR EXECUTION] Running handler at address 0x${this.interruptVector[vectorNum].toString(16)}`);
    }
  }
}

// GPIO control example
const mmio = new MemoryMappedIO();

// Configure GPIO port register (hypothetical address 0x4001)
mmio.writeRegister(0x4001, 0x0000FFFF);  // Set GPIO pins 0-15 as output
mmio.writeRegister(0x4002, 0xAAAAAAAA);  // Set pin states (alternating pattern)

// Read back pin configuration
mmio.readRegister(0x4001);

// Set up timer interrupt (IRQ 7)
mmio.registerISR(7, 0x00008000);
mmio.triggerInterrupt(7);

console.log('\nHello from Embedded Systems Engineer - low-level hardware initialized');
