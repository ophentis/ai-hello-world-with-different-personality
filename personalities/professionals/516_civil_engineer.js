// Civil Engineer: Blueprints, permits, load calculations, drainage design
// ======================================================================

class CivilProject {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.permits = [];
    this.loads = {};
  }

  calculateLoadBearing() {
    // Dead load + Live load + Environmental
    const deadLoad = 400; // kg/m² (structure weight)
    const liveLoad = 250; // kg/m² (occupancy/traffic)
    const windLoad = 150; // kg/m² (wind pressure)
    const safetyFactor = 1.35;

    const totalDesignLoad = (deadLoad + liveLoad + windLoad) * safetyFactor;

    console.log(`[STRUCTURAL LOAD ANALYSIS]`);
    console.log(`  Dead load (self-weight): ${deadLoad} kg/m²`);
    console.log(`  Live load (occupancy): ${liveLoad} kg/m²`);
    console.log(`  Environmental (wind/snow): ${windLoad} kg/m²`);
    console.log(`  Design load (with SF ${safetyFactor}): ${totalDesignLoad.toFixed(0)} kg/m²`);
    console.log(`  Foundation depth: 1.8m (below frost line)`);
  }

  drainageDesign() {
    console.log(`\n[DRAINAGE SYSTEM DESIGN]`);
    console.log(`  Surface slope: 2% minimum gradient`);
    console.log(`  Storm drain capacity: 100-year rainfall event`);
    console.log(`  Channel velocity: 0.6-1.5 m/s (erosion control)`);
    console.log(`  Subsurface percolation rate: 25mm/hr (soil classification C)`);
    console.log(`  Detention basin: 500 m³ capacity`);
  }

  permitRequirements() {
    this.permits = [
      { id: 'PERM-2024-001', type: 'Building Permit', status: 'APPROVED' },
      { id: 'PERM-2024-002', type: 'Environmental Review', status: 'PENDING' },
      { id: 'PERM-2024-003', type: 'Stormwater Management', status: 'APPROVED' }
    ];

    console.log(`\n[PERMIT CHECKLIST]`);
    this.permits.forEach(permit => {
      console.log(`  [${permit.status}] ${permit.id}: ${permit.type}`);
    });
  }

  viewBlueprint() {
    console.log(`\n[BLUEPRINT SPECIFICATIONS]`);
    console.log(`  Project: ${this.name}`);
    console.log(`  Location: ${this.location}`);
    console.log(`  Drawing scale: 1:100`);
    console.log(`  Foundation type: Reinforced concrete pad (fc' = 30 MPa)`);
    console.log(`  Reinforcement: #5 @ 300mm O.C. both ways`);
    console.log(`  Hello from Civil Engineer - Site design approved`);
  }
}

const project = new CivilProject('Commercial Office Complex', 'Downtown District');
project.calculateLoadBearing();
project.drainageDesign();
project.permitRequirements();
project.viewBlueprint();
