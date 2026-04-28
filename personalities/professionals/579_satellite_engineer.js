// Satellite Engineer: "Hello World" with Orbital Mechanics and Ground Station

const EARTH_RADIUS_KM = 6371;
const GRAVITATIONAL_CONSTANT = 6.674e-11; // m^3 kg^-1 s^-2
const EARTH_MASS = 5.972e24; // kg

class OrbitalMechanics {
  constructor(altitudeKm) {
    this.altitude = altitudeKm;
    this.semiMajorAxis = EARTH_RADIUS_KM + altitudeKm;
  }

  // Period = 2π√(a³/GM)
  calculateOrbitalPeriod() {
    const mu = GRAVITATIONAL_CONSTANT * EARTH_MASS;
    const a = this.semiMajorAxis * 1000; // Convert to meters
    const period = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / mu);
    return period / 60; // Convert to minutes
  }

  // Orbital velocity = √(GM/a)
  calculateOrbitalVelocity() {
    const mu = GRAVITATIONAL_CONSTANT * EARTH_MASS;
    const a = this.semiMajorAxis * 1000;
    return Math.sqrt(mu / a) / 1000; // km/s
  }
}

class GroundStation {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.uplinkFrequency = 2100; // MHz
    this.downlinkFrequency = 2300; // MHz
    this.telemetryBuffer = [];
  }

  receiveDownlink(data) {
    const timestamp = new Date().toISOString();
    this.telemetryBuffer.push({
      timestamp,
      data,
      signalStrength: (Math.random() * 30 + 70).toFixed(1) // dBm
    });
  }

  displayTelemetry() {
    console.log("=== Ground Station Telemetry ===");
    this.telemetryBuffer.forEach(entry => {
      console.log(`[${entry.timestamp}] Signal: ${entry.signalStrength} dBm | Data: ${entry.data}`);
    });
  }
}

const satellite = new OrbitalMechanics(400); // 400 km altitude (ISS-like)
const groundStation = new GroundStation(51.5074, -0.1278); // London

console.log("=== Satellite Communications ===");
console.log(`Orbital Altitude: ${satellite.altitude} km`);
console.log(`Orbital Period: ${satellite.calculateOrbitalPeriod().toFixed(2)} minutes`);
console.log(`Orbital Velocity: ${satellite.calculateOrbitalVelocity().toFixed(3)} km/s`);
console.log(`\nGround Station: (${groundStation.latitude}°, ${groundStation.longitude}°)`);

groundStation.receiveDownlink("Hello World - Telemetry Downlink");
groundStation.displayTelemetry();

console.log("\nContact window closed. Standing by for next pass.");
