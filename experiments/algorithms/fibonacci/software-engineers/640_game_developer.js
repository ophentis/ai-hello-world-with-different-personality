// Frame-based fibonacci generator
const TARGET_FRAMES = 20;

class FibonacciSimulation {
  constructor() {
    this.currentFrame = 0;
    this.sequence = [];
  }

  // Each update tick generates the next fibonacci number
  update() {
    if (this.currentFrame === 0) {
      this.sequence.push(0);
    } else if (this.currentFrame === 1) {
      this.sequence.push(1);
    } else {
      const prev1 = this.sequence[this.currentFrame - 1];
      const prev2 = this.sequence[this.currentFrame - 2];
      this.sequence.push(prev1 + prev2);
    }
    this.currentFrame++;
  }

  render() {
    this.sequence.forEach(num => {
      console.log(num);
    });
  }
}

const sim = new FibonacciSimulation();
for (let frame = 0; frame < TARGET_FRAMES; frame++) {
  sim.update();
}
sim.render();
