// Robotics engineer: sensor fusion, actuator control loop
class FizzBuzzRobotController {
  constructor() {
    this.position = 0;
    this.sensors = {
      modulo3: false,
      modulo5: false
    };
  }

  readSensors(n) {
    this.sensors.modulo3 = (n % 3 === 0);
    this.sensors.modulo5 = (n % 5 === 0);
  }

  actuate() {
    if (this.sensors.modulo3 && this.sensors.modulo5) return 'FizzBuzz';
    if (this.sensors.modulo3) return 'Fizz';
    if (this.sensors.modulo5) return 'Buzz';
    return String(this.position);
  }

  controlLoop(limit) {
    for (let i = 1; i <= limit; i++) {
      this.position = i;
      this.readSensors(i);
      const output = this.actuate();
      console.log(output);
    }
  }
}

const robot = new FizzBuzzRobotController();
robot.controlLoop(100);
