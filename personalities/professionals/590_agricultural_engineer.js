#!/usr/bin/env node

/**
 * AGRICULTURAL ENGINEER - Precision Farming & Irrigation
 * Soil Analysis, Water Management, Crop Yield Optimization
 */

class PrecisionFarmingSystem {
  constructor(fieldID, acreage) {
    this.fieldID = fieldID;
    this.acreage = acreage;
    this.soilType = 'Silty Loam';
    this.pHLevel = 6.8;
    this.moisturePercent = 24.3; // % field capacity
    this.rainfallInches = 18; // seasonal
    this.irrigation_gallonsPerAcre = 12000;
  }

  soilAnalysis() {
    return {
      type: this.soilType,
      pHLevel: this.pHLevel,
      pHRating: this.pHLevel > 6.5 && this.pHLevel < 7.2 ? 'OPTIMAL' : 'OUT OF RANGE',
      soilMoisture: this.moisturePercent,
      moistureStatus: this.moisturePercent > 20 ? 'ADEQUATE' : 'DRY - IRRIGATE NOW',
      organicMatter: 3.2,
      nitrogen_ppm: 28,
      phosphorus_ppm: 18,
      potassium_ppm: 220
    };
  }

  calculateIrrigationNeeds() {
    const evapotranspiration = 0.8; // ET rate in/week
    const totalWaterNeeded = (evapotranspiration - (this.rainfallInches / 20)) * 1000; // gallons
    return {
      ETrate: evapotranspiration,
      waterNeeded_gpm: (totalWaterNeeded / 7).toFixed(0),
      systemCapacity_gpm: 450,
      irrigationSchedule: 'Every 7 days, 3-hour cycle'
    };
  }

  estimateCropYield() {
    const soilScore = this.pHLevel === 6.8 ? 1.0 : 0.85;
    const moistureScore = this.moisturePercent > 20 ? 1.0 : 0.70;
    const baseYield = 165; // bushels/acre (corn)
    const projected = Math.round(baseYield * soilScore * moistureScore);

    return {
      crop: 'Corn',
      baseYield: baseYield,
      projectedYield: projected,
      confidence: 92,
      unit: 'bu/ac'
    };
  }

  generateFarmReport() {
    const soilAnalysis = this.soilAnalysis();
    const irrigation = this.calculateIrrigationNeeds();
    const yield_est = this.estimateCropYield();

    const lines = [
      '┌──────────────────────────────────────────────────┐',
      '│  PRECISION AGRICULTURE MANAGEMENT REPORT         │',
      '└──────────────────────────────────────────────────┘',
      `Field ID: ${this.fieldID} | Acreage: ${this.acreage}`,
      ``,
      'SOIL ANALYSIS:',
      `Soil Type: ${soilAnalysis.type}`,
      `pH Level: ${soilAnalysis.pHLevel} (${soilAnalysis.pHRating})`,
      `Moisture: ${soilAnalysis.soilMoisture}% (${soilAnalysis.moistureStatus})`,
      `Organic Matter: ${soilAnalysis.organicMatter}% | N: ${soilAnalysis.nitrogen_ppm} ppm`,
      ``,
      'IRRIGATION MANAGEMENT:',
      `ET Rate: ${irrigation.ETrate} in/week`,
      `Weekly Water Demand: ${irrigation.waterNeeded_gpm} gpm`,
      `System Capacity: ${irrigation.systemCapacity_gpm} gpm`,
      `Schedule: ${irrigation.irrigationSchedule}`,
      ``,
      'CROP YIELD PROJECTION:',
      `Crop: ${yield_est.crop}`,
      `Base Yield: ${yield_est.baseYield} ${yield_est.unit}`,
      `Projected Yield: ${yield_est.projectedYield} ${yield_est.unit}`,
      `Confidence Level: ${yield_est.confidence}%`,
      ``,
      '✓ Conditions optimal for high-yield production'
    ];
    return lines.join('\n');
  }
}

const farm = new PrecisionFarmingSystem('NORTH-QUARTER-40', 40);
console.log(farm.generateFarmReport());
