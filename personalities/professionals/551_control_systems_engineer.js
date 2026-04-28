// PID Controller - Feedback Loop Analysis
// Setpoint tracking with proportional-integral-derivative tuning

class PIDController {
  constructor(kp = 1.2, ki = 0.05, kd = 0.3) {
    this.Kp = kp;  // Proportional gain
    this.Ki = ki;  // Integral gain
    this.Kd = kd;  // Derivative gain
    this.errorSum = 0;
    this.prevError = 0;
  }

  step(setpoint, measuredValue, dt = 0.01) {
    const error = setpoint - measuredValue;
    this.errorSum += error * dt;
    const errorRate = (error - this.prevError) / dt;
    this.prevError = error;

    const output = (this.Kp * error) + (this.Ki * this.errorSum) + (this.Kd * errorRate);
    return output;
  }
}

// System under control: 2nd order process
class SystemModel {
  constructor() {
    this.state = 0;
    this.velocity = 0;
  }

  update(u, dt = 0.01) {
    const damping = 0.7;
    const naturalFreq = 2.0;

    // d2x/dt2 = -2*zeta*wn*dx/dt - wn^2*x + wn^2*u
    this.velocity += dt * (-2 * damping * naturalFreq * this.velocity -
                           naturalFreq ** 2 * this.state +
                           naturalFreq ** 2 * u);
    this.state += dt * this.velocity;
    return this.state;
  }
}

const controller = new PIDController(1.2, 0.05, 0.3);
const system = new SystemModel();
const setpoint = 1.0;
let output = "Stability Analysis: Tracking Setpoint\n";

for (let i = 0; i < 200; i++) {
  const controlSignal = controller.step(setpoint, system.state);
  system.update(controlSignal);
  if (i % 40 === 0) {
    output += `t=${i*0.01}s: y=${system.state.toFixed(4)}, e=${(setpoint - system.state).toFixed(4)}\n`;
  }
}

console.log(output);
console.log("Transfer Function: H(s) = wn²/(s² + 2ζwn·s + wn²)");
