// Optical Engineering - Fiber & Lens Design
// Wavelength, refractive index, numerical aperture, diffraction limit

class FiberOpticLink {
  constructor(mode, coreDiamMicrons, nCore, nCladding) {
    this.mode = mode;        // 'SMF' or 'MMF'
    this.coreD = coreDiamMicrons;
    this.n1 = nCore;         // core refractive index
    this.n0 = nCladding;     // cladding refractive index
  }

  getNumericalAperture() {
    return Math.sqrt(this.n1 ** 2 - this.n0 ** 2);
  }

  getCutoffWavelength() {
    // Lambda_c ≈ 2.405 * core_diameter * NA / (pi * V_parameter)
    // For SMF, design cutoff ~1.3um for operation at 1.55um
    if (this.mode === 'SMF') {
      return 1.31 * (this.coreD / 8.2);  // Normalized for standard SMF
    }
    return null;
  }

  getModeFieldDiameter(wavelengthUM) {
    // MFD ≈ 0.65 * core_diameter for SMF @ 1.55um
    if (this.mode === 'SMF') {
      return this.coreD * 0.65;
    }
    return this.coreD;
  }

  getDispersion(distKm, wavelengthUM) {
    // Chromatic dispersion coefficient D (ps/nm/km)
    // D(λ) = S₀ * (λ - λ₀⁴/λ³) where λ₀ ≈ 1.3um for SSMF
    const lambda0 = 1.301;
    const S0 = 0.086;  // ps/nm²/km slope
    const D = S0 * (wavelengthUM - lambda0 ** 4 / wavelengthUM ** 3);
    const totalDispersion = D * distKm;
    return totalDispersion;  // ps/nm of bandwidth
  }
}

class LensSystem {
  constructor(diamMM, focalLengthMM, fNumber) {
    this.D = diamMM;
    this.f = focalLengthMM;
    this.Fn = fNumber;
  }

  getApertureAngle() {
    return 2 * Math.atan(this.D / (2 * this.f)) * 180 / Math.PI;
  }

  getDiffractionLimit(wavelengthUM) {
    // Rayleigh criterion: θ = 1.22*λ/D (radians)
    const thetaRad = 1.22 * wavelengthUM / 1000 / this.D;
    const diffLimit = this.f * thetaRad * 1000;  // microns at focal plane
    return diffLimit;
  }

  getMagnification(objectDistMM) {
    return -this.f / (objectDistMM - this.f);
  }
}

const fiber = new FiberOpticLink('SMF', 8.2, 1.4780, 1.4710);
const lens = new LensSystem(25, 100, 4.0);

let output = "=== OPTICAL DESIGN WORKBOOK ===\n\n";

// Fiber link analysis
output += "FIBER OPTIC TRANSMISSION:\n";
output += `Type: ${fiber.mode} (${fiber.coreD}µm core)\n`;
output += `Numerical Aperture: ${fiber.getNumericalAperture().toFixed(5)}\n`;
output += `Cutoff Wavelength: ${fiber.getCutoffWavelength().toFixed(3)}µm\n`;
output += `Mode Field Diameter @ 1.55µm: ${fiber.getModeFieldDiameter(1.55).toFixed(2)}µm\n`;

const chromDisp = fiber.getDispersion(80, 1.55);  // 80km @ 1.55um
output += `Chromatic Dispersion (80km @ 1.55µm): ${chromDisp.toFixed(1)} ps/nm\n`;
output += `  → Pulse broadening limit: ~6 ps (requires DCF or EDC)\n\n`;

// Lens design
output += "LENS SYSTEM (Microscope Objective):\n";
output += `Diameter: ${lens.D}mm | f=${lens.f}mm | f/# ${lens.Fn}\n`;
output += `Aperture Angle: ${lens.getApertureAngle().toFixed(1)}°\n`;
output += `Diffraction Limit (λ=405nm UV): ${lens.getDiffractionLimit(0.405).toFixed(3)}µm\n`;
output += `Diffraction Limit (λ=633nm red): ${lens.getDiffractionLimit(0.633).toFixed(3)}µm\n`;

const mag = lens.getMagnification(105);
output += `At 105mm object distance: Magnification = ${mag.toFixed(1)}x\n\n`;

output += "Birefringence: PMF specified (beat length 3.2mm)\n";
output += "Nonlinearity: SPM coefficient γ ≈ 1.3 (W·km)⁻¹";
console.log(output);
