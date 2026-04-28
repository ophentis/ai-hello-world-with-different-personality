// Solutions Architect - System Design, Scalability, Microservices Trade-offs
// Evaluates architectural patterns and technical trade-offs

const systemArchitecture = {
  name: "E-commerce Platform v3",
  pattern: "Microservices + Event-Driven",
  services: [
    { name: "API Gateway", instances: 3, region: "us-east-1", sla: "99.95%" },
    { name: "Auth Service", instances: 2, region: "us-east-1", sla: "99.99%" },
    { name: "Order Service", instances: 4, region: "us-east-1", sla: "99.90%" },
    { name: "Payment Service", instances: 3, region: "us-east-1,eu-west-1", sla: "99.99%" }
  ],
  eventBus: "Kafka (3 brokers, RF=3)",
  database: "PostgreSQL (primary) + Redis (cache)"
};

const tradeoffs = [
  { aspect: "Scalability", option_A: "Monolith", option_B: "Microservices", chosen: "Microservices", rationale: "Independent scaling per service" },
  { aspect: "Operational Complexity", option_A: "Low", option_B: "High", chosen: "Accepted", rationale: "DevOps automation mitigates" },
  { aspect: "Data Consistency", option_A: "ACID", option_B: "Eventual", chosen: "Eventual", rationale: "Acceptable for business domain" }
];

function designArchitecture() {
  console.log("╔══════════════════════════════════════╗");
  console.log("║   SOLUTION ARCHITECTURE BLUEPRINT    ║");
  console.log("╚══════════════════════════════════════╝\n");

  console.log(`System: ${systemArchitecture.name}`);
  console.log(`Pattern: ${systemArchitecture.pattern}`);
  console.log(`Event Bus: ${systemArchitecture.eventBus}\n`);

  console.log("MICROSERVICES TOPOLOGY:");
  console.log("─".repeat(50));
  systemArchitecture.services.forEach(svc => {
    console.log(`• ${svc.name}`);
    console.log(`  Instances: ${svc.instances} | Region: ${svc.region} | SLA: ${svc.sla}`);
  });

  console.log("\n\nARCHITECTURAL TRADE-OFFS ANALYSIS:");
  console.log("─".repeat(50));
  tradeoffs.forEach(t => {
    console.log(`Aspect: ${t.aspect}`);
    console.log(`  ${t.option_A} vs ${t.option_B}`);
    console.log(`  → Decision: ${t.chosen}`);
    console.log(`  Rationale: ${t.rationale}\n`);
  });

  console.log("SCALABILITY METRICS:");
  const totalInstances = systemArchitecture.services.reduce((sum, s) => sum + s.instances, 0);
  console.log(`Total compute instances: ${totalInstances}`);
  console.log(`Horizontal scaling: Supported`);
  console.log(`Database replication: Multi-region capable\n`);

  console.log("✓ Architecture approved for production");
}

designArchitecture();
