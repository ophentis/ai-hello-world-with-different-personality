// Graphics Programmer: "Hello World" via Vertex Processing & Rasterization

class Vertex {
  constructor(x, y, z) {
    this.position = [x, y, z];
    this.color = [1.0, 1.0, 1.0, 1.0]; // RGBA
  }

  // Vertex Shader: Transform to clip space
  vertexShader(mvpMatrix) {
    const [x, y, z] = this.position;
    const homogeneous = [x, y, z, 1.0];
    // Simplified MVP multiplication
    const clipPos = [
      homogeneous[0] * mvpMatrix[0],
      homogeneous[1] * mvpMatrix[1],
      homogeneous[2] * mvpMatrix[2],
      homogeneous[3]
    ];
    return clipPos;
  }
}

class Fragment {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  // Fragment Shader: Calculate final pixel color
  fragmentShader() {
    return this.color;
  }
}

class GPUPipeline {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.framebuffer = [];
    this.mvpMatrix = [1.0, 1.0, 1.0, 1.0]; // Identity matrix (simplified)
  }

  processVertices(vertices) {
    console.log(`Vertex Stage: Processing ${vertices.length} vertices`);
    return vertices.map(v => v.vertexShader(this.mvpMatrix));
  }

  rasterize(fragments) {
    console.log(`Rasterization: ${fragments.length} fragments generated`);
    fragments.forEach(f => {
      this.framebuffer.push(f.fragmentShader());
    });
  }

  render(text) {
    console.log(`\nRender Target: ${this.width}x${this.height}`);
    console.log(`Display: ${text}`);
    console.log(`Framebuffer Pixels: ${this.framebuffer.length}`);
  }
}

const gpu = new GPUPipeline(1024, 768);
const vertices = [
  new Vertex(0.0, 0.5, 0.0),
  new Vertex(-0.5, -0.5, 0.0),
  new Vertex(0.5, -0.5, 0.0)
];

gpu.processVertices(vertices);
const fragments = vertices.map(v => new Fragment(v.position[0], v.position[1], v.color));
gpu.rasterize(fragments);
gpu.render("Hello World");

console.log("\n✓ GPU Pipeline Complete");
