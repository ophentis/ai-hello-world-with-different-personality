// OS Developer: "Hello World" Process Scheduling with Context Switching

class PCB {
  // Process Control Block
  constructor(pid, priority = 0) {
    this.pid = pid;
    this.priority = priority;
    this.state = 'READY';
    this.context = { pc: 0, registers: {}, memoryPages: [] };
    this.cpuBursts = [10, 8, 6];
    this.currentBurst = 0;
  }

  contextSwitch() {
    const burst = this.cpuBursts[this.currentBurst % this.cpuBursts.length];
    this.currentBurst++;
    this.state = 'RUNNING';
    return burst;
  }

  yield() {
    this.state = 'READY';
  }

  terminate() {
    this.state = 'TERMINATED';
  }
}

class Scheduler {
  constructor() {
    this.readyQueue = [];
    this.currentProcess = null;
    this.systemTime = 0;
  }

  createProcess(pid, priority) {
    const pcb = new PCB(pid, priority);
    this.readyQueue.push(pcb);
    console.log(`[${this.systemTime}] Process ${pid} created (Priority: ${priority})`);
  }

  schedule() {
    // Round-robin scheduling
    if (this.currentProcess) {
      this.currentProcess.yield();
      this.readyQueue.push(this.currentProcess);
    }

    if (this.readyQueue.length === 0) return null;

    this.currentProcess = this.readyQueue.shift();
    const burst = this.currentProcess.contextSwitch();
    console.log(`[${this.systemTime}] Context Switch → PID ${this.currentProcess.pid} (burst: ${burst}ms)`);
    return burst;
  }

  runAllProcesses() {
    while (this.readyQueue.length > 0 || this.currentProcess) {
      const burst = this.schedule();
      if (burst) {
        this.systemTime += burst;
        if (this.currentProcess.currentBurst >= this.currentProcess.cpuBursts.length) {
          this.currentProcess.terminate();
          console.log(`[${this.systemTime}] Process ${this.currentProcess.pid} TERMINATED`);
          this.currentProcess = null;
        }
      }
    }
  }
}

const scheduler = new Scheduler();
console.log("=== Operating System Scheduler ===");
scheduler.createProcess(1, 0);
scheduler.createProcess(2, 0);
console.log("\nExecuting: Hello World (Round-Robin Scheduling)\n");
scheduler.runAllProcesses();
console.log("\nAll processes completed. Memory pages reclaimed.");
