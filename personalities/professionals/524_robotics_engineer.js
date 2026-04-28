#!/usr/bin/env node
// Robotics Engineer: Hello World via sensor fusion and servo control
// Hardware-software integration - closed-loop feedback control

class ServoController {
  constructor(id, minAngle = 0, maxAngle = 180) {
    this.id = id;
    this.angle = minAngle;
    this.minAngle = minAngle;
    this.maxAngle = maxAngle;
    this.speed = 0;
    this.load = 0;
  }

  setPosition(targetAngle) {
    this.angle = Math.max(this.minAngle, Math.min(this.maxAngle, targetAngle));
    return `Servo #${this.id}: ${this.angle}° (load: ${this.load}%)`;
  }
}

class IMUSensor {
  constructor() {
    this.accel = { x: 0.1, y: 0.05, z: 9.81 };
    this.gyro = { x: 0.02, y: 0.01, z: 0.0 };
    this.magnetometer = { x: 350, y: 100, z: 250 };
  }

  readFusion() {
    const magnitude = Math.sqrt(
      this.accel.x ** 2 + this.accel.y ** 2 + this.accel.z ** 2
    );
    return magnitude;
  }
}

console.log('=== Robotics System Boot Sequence ===\n');

// Initialize servo array
const servos = [
  new ServoController(1, 0, 180),
  new ServoController(2, 0, 180),
  new ServoController(3, 0, 180)
];

// Initialize IMU
const imu = new IMUSensor();

console.log('Hardware Detected:');
console.log(`  - 3 Servo Motors (range: 0-180°)`);
console.log(`  - 1 IMU Sensor (9-DOF)`);
console.log(`\nAccelerometer Data: ${JSON.stringify(imu.accel)}`);
console.log(`Sensor Fusion Magnitude: ${imu.readFusion().toFixed(2)} m/s²\n`);

console.log('Executing movement sequence:');
servos.forEach((servo, i) => {
  const angle = 45 + (i * 30);
  console.log(`  ${servo.setPosition(angle)}`);
});

console.log('\n✓ Robot status: Ready');
console.log('✓ Hello World transmitted via servo actuators');
