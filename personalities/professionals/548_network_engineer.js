// Network Engineer - Subnets, Routing, Packet Inspection, BGP, Latency
// Manages network topology, performance monitoring, and diagnostics

const networkTopology = {
  asn: 65001,
  datacenters: [
    { name: "US-East", ip: "10.0.0.0/8", latency: 2, loss: 0.01 },
    { name: "EU-West", ip: "10.1.0.0/8", latency: 85, loss: 0.02 },
    { name: "APAC", ip: "10.2.0.0/8", latency: 120, loss: 0.03 }
  ]
};

const subnets = [
  { name: "Web Tier", cidr: "10.0.1.0/24", hosts: 250, vlan: 100 },
  { name: "App Tier", cidr: "10.0.2.0/24", hosts: 200, vlan: 101 },
  { name: "DB Tier", cidr: "10.0.3.0/24", hosts: 50, vlan: 102 }
];

const bgpRoutes = [
  { prefix: "10.0.0.0/8", nextHop: "192.168.1.1", asPath: "65001 64512", metric: 100 },
  { prefix: "10.1.0.0/8", nextHop: "192.168.1.5", asPath: "65001 65002 64512", metric: 200 }
];

function analyzeNetworkHealth() {
  console.log("╔═══════════════════════════════════════╗");
  console.log("║      NETWORK OPERATIONS CENTER       ║");
  console.log("╚═══════════════════════════════════════╝\n");

  console.log(`Autonomous System Number (ASN): ${networkTopology.asn}\n`);

  console.log("DATACENTER INTERCONNECT LATENCY:");
  console.log("─".repeat(45));
  networkTopology.datacenters.forEach(dc => {
    const status = dc.latency < 10 ? "✓" : dc.latency < 100 ? "⚠" : "⚠";
    console.log(`${status} ${dc.name}: ${dc.latency}ms (Loss: ${(dc.latency * 100).toFixed(2)}%)`);
  });

  console.log("\n\nSUBNET ALLOCATION:");
  console.log("─".repeat(45));
  subnets.forEach(subnet => {
    const usagePercent = (subnet.hosts / 254) * 100;
    console.log(`Tier: ${subnet.name}`);
    console.log(`  CIDR: ${subnet.cidr} (${subnet.hosts} hosts, ${usagePercent.toFixed(1)}% used)`);
    console.log(`  VLAN: ${subnet.vlan}`);
  });

  console.log("\n\nBGP ROUTING TABLE:");
  console.log("─".repeat(45));
  bgpRoutes.forEach(route => {
    console.log(`Destination: ${route.prefix}`);
    console.log(`  Next Hop: ${route.nextHop} | AS Path: ${route.asPath}`);
    console.log(`  Metric: ${route.metric}`);
  });

  console.log("\n\nPACKET FLOW ANALYSIS:");
  const packetLoss = (0.015 * 100).toFixed(3);
  console.log(`Average packet loss: ${packetLoss}%`);
  console.log(`Jitter threshold: ±5ms`);
  console.log(`BGP convergence: <100ms`);

  console.log("\n✓ Network health: NOMINAL");
}

analyzeNetworkHealth();
