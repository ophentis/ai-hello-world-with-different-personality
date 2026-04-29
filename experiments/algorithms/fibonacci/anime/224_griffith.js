// Griffith's Fibonacci - Each sacrifice reveals the next vision
class AspirationalSequence {
  generate() {
    let vision = 0, nextVision = 1;
    console.log(vision);
    for (let step = 1; step < 20; step++) {
      console.log(nextVision);
      [vision, nextVision] = [nextVision, vision + nextVision];
    }
  }
}

new AspirationalSequence().generate();
