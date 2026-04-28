// Volcanology: Eruption Monitoring & Hazard Assessment
// Magma composition, volcanic explosivity index, pyroclastic flow modeling

class MagmaComposition {
  constructor(volcanoName, silicaContent, viscosity_Pa_s, temperature_C) {
    this.name = volcanoName;
    this.sio2 = silicaContent;  // weight %
    this.viscosity = viscosity_Pa_s;
    this.tempC = temperature_C;
    this.type = this.classifyMagma();
  }

  classifyMagma() {
    if (this.sio2 < 52) return 'Basaltic';
    if (this.sio2 < 63) return 'Andesitic';
    return 'Rhyolitic';
  }

  eruptionStyle() {
    if (this.viscosity < 1e2) return 'Effusive (lava flows)';
    if (this.viscosity < 1e4) return 'Moderate (mixed)';
    return 'Explosive (pyroclastic)';
  }
}

// Recent magma samples
const mt_vesuvius = new MagmaComposition('Vesuvius', 52, 1e3, 1050);
const mt_merapi = new MagmaComposition('Merapi', 59, 1e5, 920);
const mt_sakurajima = new MagmaComposition('Sakurajima', 62, 1e6, 890);

console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓');
console.log('┃  VOLCANIC HAZARD ASSESSMENT SYSTEM           ┃');
console.log('┃  Real-time Eruption Monitoring               ┃');
console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\n');

[mt_vesuvius, mt_merapi, mt_sakurajima].forEach(magma => {
  console.log(`${magma.name.toUpperCase()}`);
  console.log(`  Magma Type: ${magma.classifyMagma()}`);
  console.log(`  SiO₂ Content: ${magma.sio2}%`);
  console.log(`  Temperature: ${magma.tempC}°C`);
  console.log(`  Viscosity: ${magma.viscosity.toExponential(1)} Pa·s`);
  console.log(`  Eruption Style: ${magma.eruptionStyle()}\n`);
});

// Volcanic Explosivity Index (VEI) scale
const veiData = [
  { vei: 5, tephra_km3: 1, height_km: 25, label: 'Explosive' },
  { vei: 6, tephra_km3: 10, height_km: 35, label: 'Cataclysmic' },
  { vei: 7, tephra_km3: 100, height_km: 50, label: 'Supereruption' }
];

console.log('Volcanic Explosivity Index (VEI) Reference:');
console.log('VEI  Tephra (km³)  Column Height  Classification');
console.log('────────────────────────────────────────────────');
veiData.forEach(v => {
  console.log(`  ${v.vei}   ${v.tephra_km3.toExponential(1).padEnd(10)}  ${v.height_km}+ km         ${v.label}`);
});

// Pyroclastic flow hazard zone
const flowDistance = 12;  // km
const flowTemperature = 650;  // Celsius
const hazardLevel = flowDistance < 5 ? 'CRITICAL' : flowDistance < 10 ? 'HIGH' : 'MODERATE';

console.log(`\nPyroclastic Flow Forecast:`);
console.log(`  Estimated Reach: ${flowDistance} km from vent`);
console.log(`  Temperature: ${flowTemperature}°C`);
console.log(`  Hazard Level: ${hazardLevel}`);
console.log(`  Evacuation Radius: ${(flowDistance * 1.3).toFixed(1)} km recommended\n`);

console.log('✓ Volcanic monitoring active.');
console.log('✓ Alert threshold set to YELLOW.');
