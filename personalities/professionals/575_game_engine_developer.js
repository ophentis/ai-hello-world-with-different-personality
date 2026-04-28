// Game Engine Developer: "Hello World" with Entity-Component System & Render Loop

class Entity {
  constructor(id) {
    this.id = id;
    this.components = {};
  }

  addComponent(name, component) {
    this.components[name] = component;
  }

  getComponent(name) {
    return this.components[name];
  }
}

class TransformComponent {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class RenderComponent {
  constructor(text) {
    this.text = text;
  }
}

class GameEngine {
  constructor() {
    this.entities = [];
    this.frameCount = 0;
    this.deltaTime = 0.016; // 60 FPS
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  update(dt) {
    this.deltaTime = dt;
    for (const entity of this.entities) {
      const transform = entity.getComponent('transform');
      if (transform) {
        transform.x += 1 * dt * 60;
      }
    }
  }

  render() {
    console.log(`\n--- Frame ${this.frameCount} (${(this.deltaTime * 1000).toFixed(1)}ms) ---`);
    for (const entity of this.entities) {
      const render = entity.getComponent('render');
      const transform = entity.getComponent('transform');
      if (render && transform) {
        console.log(`[${transform.x.toFixed(1)}, ${transform.y}] ${render.text}`);
      }
    }
  }

  loop(frames = 3) {
    for (let i = 0; i < frames; i++) {
      this.update(this.deltaTime);
      this.render();
      this.frameCount++;
    }
  }
}

const engine = new GameEngine();
const helloEntity = new Entity(1);
helloEntity.addComponent('transform', new TransformComponent(0, 0));
helloEntity.addComponent('render', new RenderComponent("Hello World"));
engine.addEntity(helloEntity);

console.log("=== Game Engine Initialization ===");
engine.loop(3);
console.log("\nRender loop complete. Game state persisted.");
