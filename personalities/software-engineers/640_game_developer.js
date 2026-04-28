/**
 * Game Developer: update loop, delta time, entity system, frame-based rendering
 * Demonstrates: game loop, delta time, entity manager, render pipeline
 */

// === GAME CONSTANTS ===
const SCREEN_WIDTH = 80;
const SCREEN_HEIGHT = 24;
const TARGET_FPS = 60;
const FRAME_TIME = 1000 / TARGET_FPS;

// === ENTITY SYSTEM ===
class Entity {
  constructor(x, y, char) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.velocityX = 0;
    this.velocityY = 0;
  }

  update(deltaTime) {
    this.x += this.velocityX * deltaTime;
    this.y += this.velocityY * deltaTime;
  }

  draw() {
    return { x: Math.floor(this.x), y: Math.floor(this.y), char: this.char };
  }
}

// === GAME WORLD ===
class GameWorld {
  constructor() {
    this.entities = [];
    this.screen = [];
    this.frameCount = 0;
    this.deltaTime = 0;
    this.lastFrameTime = Date.now();
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  update(deltaTime) {
    // Update all entities
    this.entities.forEach(entity => entity.update(deltaTime));
  }

  render() {
    // Clear screen
    this.screen = Array(SCREEN_HEIGHT)
      .fill(null)
      .map(() => Array(SCREEN_WIDTH).fill(' '));

    // Draw all entities
    this.entities.forEach(entity => {
      const pos = entity.draw();
      if (pos.x >= 0 && pos.x < SCREEN_WIDTH && pos.y >= 0 && pos.y < SCREEN_HEIGHT) {
        this.screen[pos.y][pos.x] = pos.char;
      }
    });

    return this.screen.map(row => row.join('')).join('\n');
  }

  calculateDeltaTime() {
    const now = Date.now();
    this.deltaTime = (now - this.lastFrameTime) / 1000;
    this.lastFrameTime = now;
  }
}

// === GAME LOOP ===
class GameEngine {
  constructor() {
    this.world = new GameWorld();
    this.running = false;
    this.frameLimit = 5; // Render 5 frames
  }

  start() {
    this.running = true;
    console.log('╔════════════════════════════════════════╗');
    console.log('║       HELLO WORLD - Game Engine        ║');
    console.log('╚════════════════════════════════════════╝\n');

    this.gameLoop();
  }

  gameLoop() {
    if (this.world.frameCount >= this.frameLimit) {
      this.running = false;
      return;
    }

    // Calculate delta time
    this.world.calculateDeltaTime();

    // Update
    this.world.update(this.world.deltaTime);

    // Render
    this.render();

    this.world.frameCount++;
  }

  render() {
    const frameData = this.world.render();
    console.log(`\n╔ Frame ${this.world.frameCount} (ΔT: ${(this.world.deltaTime * 1000).toFixed(1)}ms) ╗`);
    console.log(frameData);
    console.log('╚' + '═'.repeat(38) + '╝');
  }
}

// === INITIALIZE GAME ===
const game = new GameEngine();

// Create "Hello World" text as entities
const text = 'HELLO WORLD';
let x = SCREEN_WIDTH / 2 - text.length / 2;
text.split('').forEach((char, i) => {
  const entity = new Entity(x + i, SCREEN_HEIGHT / 2, char);
  entity.velocityX = (Math.random() - 0.5) * 10;
  entity.velocityY = (Math.random() - 0.5) * 5;
  game.world.addEntity(entity);
});

// Run game loop
game.start();
for (let i = 1; i < 5; i++) {
  game.gameLoop();
}

console.log('\n[GAME] Simulation complete. Final frame count:', game.world.frameCount);
