#!/usr/bin/env node
// Marine Biologist: Hello World via species classification and ecosystem observation
// Taxonomy and field research thinking

const OCEAN_ZONES = {
  epipelagic: { depth: '0-200m', name: 'Sunlit Zone', temp: 20 },
  mesopelagic: { depth: '200-1000m', name: 'Twilight Zone', temp: 4 },
  bathypelagic: { depth: '1000-4000m', name: 'Midnight Zone', temp: 1 },
  abyssopelagic: { depth: '4000-6000m', name: 'Abyss', temp: 0.5 }
};

class Species {
  constructor(genus, species, commonName, zone, classification) {
    this.genus = genus;
    this.species = species;
    this.commonName = commonName;
    this.binomialNomenclature = `${genus} ${species}`;
    this.zone = zone;
    this.classification = classification; // Animalia, Chordata, etc.
  }

  toString() {
    const zoneInfo = OCEAN_ZONES[this.zone];
    return `${this.commonName}\n  Taxonomy: ${this.binomialNomenclature}\n  Zone: ${zoneInfo.name} (${zoneInfo.depth})\n  Temp: ${zoneInfo.temp}°C`;
  }
}

console.log('=== Marine Biodiversity Survey ===\n');

// Field observations
const specimens = [
  new Species('Thalassa', 'helloensis', 'Hello Dolphin', 'epipelagic', 'Cetacean'),
  new Species('Gryllus', 'marinalis', 'Singing Whale', 'mesopelagic', 'Cetacean'),
  new Species('Abysso', 'giganteus', 'Deep Squid', 'bathypelagic', 'Cephalopod'),
  new Species('Trenchus', 'profundis', 'Hadal Snailfish', 'abyssopelagic', 'Fish')
];

console.log('Field Collection Log:');
specimens.forEach((specimen, idx) => {
  console.log(`\nSpecimen ${idx + 1}:`);
  console.log(specimen.toString());
});

console.log('\n\n=== Ecosystem Analysis ===');
console.log('Species richness by zone:');
Object.entries(OCEAN_ZONES).forEach(([key, zone]) => {
  const count = specimens.filter(s => s.zone === key).length;
  console.log(`  ${zone.name}: ${count} species observed`);
});

console.log('\n✓ Survey complete - "Hello World" documented in marine taxonomy');
