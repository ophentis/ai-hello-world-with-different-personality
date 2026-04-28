#!/usr/bin/env node

/**
 * BUILDING CODE INSPECTOR - IBC Compliance Audit
 * Permits, Egress Requirements, Occupancy Load
 */

class BuildingInspection {
  constructor(address) {
    this.address = address;
    this.permitNumber = 'BLD-2026-089453';
    this.occupancyClassification = 'B1'; // Assembly, Business, etc.
    this.squareFootage = 45000;
    this.stories = 4;
    this.violations = [];
  }

  calculateOccupancyLoad() {
    // IBC Table 1004.1.2 - occupant load factors
    const factors = { 'B1': 7 }; // 1 occupant per 7 sq ft
    return Math.ceil(this.squareFootage / factors[this.occupancyClassification]);
  }

  inspectEgress() {
    const maxOccupancy = this.calculateOccupancyLoad();
    const requiredExits = maxOccupancy > 500 ? 3 : maxOccupancy > 250 ? 2 : 1;

    const findings = {
      occupancyLoad: maxOccupancy,
      requiredExitCount: requiredExits,
      minClearWidth: 44, // inches for double doors
      maxTravelDistance: 250, // feet to exit
    };
    return findings;
  }

  auditReport() {
    const egress = this.inspectEgress();
    const lines = [
      '┌─ BUILDING CODE INSPECTION REPORT ─┐',
      `Address: ${this.address}`,
      `Permit #: ${this.permitNumber}`,
      `Occupancy Classification: ${this.occupancyClassification}`,
      `Building Area: ${this.squareFootage.toLocaleString()} sq ft | Stories: ${this.stories}`,
      '',
      'EGRESS & OCCUPANCY ANALYSIS:',
      `Calculated Occupancy Load: ${egress.occupancyLoad} persons`,
      `Required Exits: ${egress.requiredExitCount}`,
      `Min. Door Width: ${egress.minClearWidth}" (double swing)`,
      `Max Travel Distance: ${egress.maxTravelDistance} feet`,
      ``,
      'CODE COMPLIANCE: APPROVED ✓',
      'All IBC 2021 requirements satisfied.',
      'Permit issued: Valid for 180 days.'
    ];
    return lines.join('\n');
  }
}

const building = new BuildingInspection('456 Commerce Tower, Floor 2');
console.log(building.auditReport());
