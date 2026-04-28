/**
 * Embedded systems: memory-conscious, fixed buffers, register constants
 * Demonstrates: no dynamic allocation, bit manipulation, fixed-size structures
 */

// === HARDWARE CONSTANTS (REGISTERS) ===
const UART_DR = 0x0;        // Data Register
const UART_FR = 0x18;       // Flag Register
const UART_FR_TXFF = 0x20;  // Transmit FIFO Full
const UART_FR_BUSY = 0x08;  // UART Busy

const LED_PORT_A = 0x40;
const LED_PIN = 3;

// === FIXED BUFFER (NO MALLOC) ===
const BUFFER_SIZE = 32;
const messageBuffer = new Uint8Array(BUFFER_SIZE);

// === MEMORY-CONSCIOUS MESSAGE ===
const encodeMessage = (str) => {
  if (str.length > BUFFER_SIZE - 1) {
    console.log('[ERROR] Message too large for buffer');
    return null;
  }

  for (let i = 0; i < str.length; i++) {
    messageBuffer[i] = str.charCodeAt(i);
  }
  messageBuffer[str.length] = 0; // Null terminator
  return str.length;
};

// === UART WRITE (SIMULATED) ===
const uartWrite = (buffer, len) => {
  let output = '';
  for (let i = 0; i < len; i++) {
    const byte = buffer[i];
    if (byte === 0) break; // Null terminator

    // Wait for FIFO (simulated)
    while ((uartReadFlag() & UART_FR_TXFF) !== 0) {
      // Busy wait - typical in embedded
    }

    output += String.fromCharCode(byte);
  }
  return output;
};

const uartReadFlag = () => UART_FR; // Simulated: assume ready

// === LED CONTROL (BIT MANIPULATION) ===
const ledOn = () => {
  const portA = 0x00;
  return portA | (1 << LED_PIN); // Set bit 3
};

const ledOff = () => {
  const portA = 0xFF;
  return portA & ~(1 << LED_PIN); // Clear bit 3
};

// === MAIN LOOP (BLOCKING) ===
console.log('[STARTUP] Embedded System v0.1');
console.log('[INIT] Buffer allocation: 32 bytes (FIXED)');

const msgLen = encodeMessage('Hello World');
if (msgLen > 0) {
  const output = uartWrite(messageBuffer, msgLen);
  console.log(`[UART] Transmitted: "${output}"`);
}

console.log(`[LED] State: ${(ledOn() & (1 << LED_PIN)) ? 'ON' : 'OFF'}`);
console.log('[HALT] System ready for low-power mode');
