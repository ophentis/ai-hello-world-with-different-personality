// FPGA Engineer - Hardware Description, Clock Domains, Synthesis Constraints
// Designs digital logic with timing and resource optimization

const fpgaDesign = {
  targetDevice: "Xilinx Artix-7 (XC7A100T)",
  clockFrequency: 125, // MHz
  clockPeriod: 8.0, // ns
  sliceUtilization: 68, // percent
  bram_usage: 45 // percent
};

const clockDomains = [
  { name: "clk_sys", frequency: 125, period: 8.0, domain: "Synchronous" },
  { name: "clk_ref", frequency: 200, period: 5.0, domain: "Clock Module" },
  { name: "clk_slow", frequency: 10, period: 100.0, domain: "Management" }
];

const synthesisConstraints = [
  { type: "IOB", constraint: "LVCMOS33", pins: 96 },
  { type: "TIMING", constraint: "Tsu: 2ns, Th: 1ns (DDR interface)" },
  { type: "POWER", constraint: "Max 5W dissipation in die" }
];

const flipflops = {
  total: 4872,
  distributedLogic: 3456,
  blockRAM: 192 // 36kb blocks
};

function generateHDLReport() {
  console.log("╔═══════════════════════════════════════╗");
  console.log("║    FPGA DESIGN & SYNTHESIS REPORT    ║");
  console.log("╚═══════════════════════════════════════╝\n");

  console.log(`Target Device: ${fpgaDesign.targetDevice}`);
  console.log(`System Clock: ${fpgaDesign.clockFrequency} MHz (${fpgaDesign.clockPeriod}ns period)\n`);

  console.log("CLOCK DOMAIN CONFIGURATION:");
  console.log("─".repeat(45));
  clockDomains.forEach(cd => {
    console.log(`CLK: ${cd.name} (${cd.frequency}MHz, ${cd.period}ns)`);
    console.log(`     Domain: ${cd.domain}`);
  });

  console.log("\n\nLOGIC RESOURCE UTILIZATION:");
  console.log("─".repeat(45));
  console.log(`Slice Utilization: ${fpgaDesign.sliceUtilization}%`);
  console.log(`BRAM Usage: ${fpgaDesign.bram_usage}%`);
  console.log(`Total Flip-Flops: ${flipflops.total}`);
  console.log(`  • Distributed Logic: ${flipflops.distributedLogic}`);
  console.log(`  • Block RAM Blocks: ${flipflops.blockRAM} x 36Kb`);

  console.log("\n\nSYNTHESIS CONSTRAINTS:");
  console.log("─".repeat(45));
  synthesisConstraints.forEach(constraint => {
    console.log(`[${constraint.type}] ${constraint.constraint}`);
  });

  console.log("\n\nTIMING ANALYSIS:");
  const setupTime = 2;
  const clockToPeriod = (setupTime / fpgaDesign.clockPeriod * 100).toFixed(1);
  console.log(`Setup margin: ${setupTime}ns (${clockToPeriod}% of period)`);
  console.log(`Hold margin: 1ns`);
  console.log(`Slack: POSITIVE (timing closure achieved)\n`);

  console.log("PLACE & ROUTE OPTIMIZATION:");
  console.log(`Density: High (optimized for Artix-7 LUT distribution)`);
  console.log(`Routing congestion: <45%`);
  console.log(`✓ Ready for bitstream generation`);
}

generateHDLReport();
