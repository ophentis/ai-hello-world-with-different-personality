#!/usr/bin/env node
// Geologist: Hello World via stratigraphy and mineral analysis
// Rock formations, tectonic context, field methodology

const GEOLOGICAL_TIME_SCALE = {
  holocene: { age: '0-0.01 Ma', name: 'Holocene', events: 'Human era' },
  pleistocene: { age: '0.01-2.6 Ma', name: 'Pleistocene', events: 'Ice ages' },
  pliocene: { age: '2.6-5.3 Ma', name: 'Pliocene', events: 'Early hominids' },
  miocene: { age: '5.3-23 Ma', name: 'Miocene', events: 'Climate change' }
};

class RockSample {
  constructor(id, mineralComposition, texture, color, stratum) {
    this.id = id;
    this.minerals = mineralComposition;
    this.texture = texture;
    this.color = color;
    this.stratum = stratum;
    this.depth = 0;
  }

  getDescription() {
    return `[${this.id}] ${this.texture} ${this.color} rock | Minerals: ${this.minerals.join(', ')}`;
  }
}

function analyzeStratigraphy(samples) {
  console.log('Core Stratigraphy Analysis:');
  samples.forEach((sample, idx) => {
    console.log(`  Layer ${idx}: ${sample.getDescription()}`);
  });
}

console.log('=== Geological Field Notebook ===\n');

// Stratigraphic column from field survey
const coreSamples = [
  new RockSample('HW-001', ['Quartz', 'Feldspar', 'Mica'], 'Fine-grained', 'Light gray', 'Surface'),
  new RockSample('HW-002', ['Calcite', 'Quartz'], 'Medium-grained', 'Cream', 'Upper'),
  new RockSample('HW-003', ['Magnetite', 'Hematite'], 'Coarse-grained', 'Dark red-brown', 'Middle'),
  new RockSample('HW-004', ['Olivine', 'Pyroxene'], 'Crystalline', 'Black', 'Basement')
];

console.log('Site: Hello World Formation');
console.log('Location: 40.7128°N 74.0060°W (Datum: WGS84)');
console.log('Tectonic Setting: Continental margin\n');

analyzeStratigraphy(coreSamples);

console.log('\n=== Geochemical Summary ===');
console.log('Primary mineral phases detected:');
const allMinerals = new Set(coreSamples.flatMap(s => s.minerals));
Array.from(allMinerals).forEach(mineral => {
  console.log(`  • ${mineral}`);
});

console.log('\n=== Age Constraints ===');
console.log('Stratigraphic age: Holocene to Pliocene');
console.log(`  ${GEOLOGICAL_TIME_SCALE.holocene.name}: ${GEOLOGICAL_TIME_SCALE.holocene.events}`);

console.log('\n✓ Field work complete - Hello World formation documented');
