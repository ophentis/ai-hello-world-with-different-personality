// Firmware Engineer: "Hello World" with Bootloader, Flash Memory, and Watchdog

class MemoryBank {
  constructor(size) {
    this.buffer = Buffer.alloc(size, 0xFF); // Flash default: 0xFF
  }

  write(address, data) {
    Buffer.from(data).copy(this.buffer, address);
  }

  read(address, length) {
    return this.buffer.slice(address, address + length);
  }
}

class WatchdogTimer {
  constructor(timeoutMs) {
    this.timeoutMs = timeoutMs;
    this.lastKick = Date.now();
    this.expired = false;
  }

  kick() {
    this.lastKick = Date.now();
  }

  checkExpired() {
    if (Date.now() - this.lastKick > this.timeoutMs) {
      this.expired = true;
      return true;
    }
    return false;
  }
}

class Bootloader {
  constructor() {
    this.flash = new MemoryBank(4096);      // 4KB Flash
    this.ram = new MemoryBank(1024);        // 1KB RAM
    this.watchdog = new WatchdogTimer(100);
  }

  init() {
    console.log("=== Bootloader Initialization ===");
    console.log("Hardware registers configured");
    console.log("Flash: 4KB @ 0x0000");
    console.log("RAM:   1KB @ 0x1000");
    this.watchdog.kick();
    console.log(`Watchdog timer armed (${this.watchdog.timeoutMs}ms)`);
  }

  loadApplication() {
    const appCode = "Hello World Firmware";
    console.log(`\nLoading application: "${appCode}"`);
    this.flash.write(0x0100, appCode);
    this.watchdog.kick();
    console.log("Program verification: CRC OK");
  }

  executeApplication() {
    const programData = this.flash.read(0x0100, 19).toString().trim();
    console.log(`\nApplication executing: ${programData}`);
    this.watchdog.kick();
  }

  run() {
    this.init();
    this.loadApplication();
    this.executeApplication();
    console.log("\nFirmware execution complete. WDT disarmed.");
  }
}

const bootloader = new Bootloader();
bootloader.run();
