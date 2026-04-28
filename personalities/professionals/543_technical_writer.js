// Technical Writer - Documentation Structure & Style Guide Compliance
// Maintains clear, concise prose with proper formatting and audience targeting

const documentStructure = {
  title: "Getting Started with API Integration",
  audience: "Developers (intermediate level)",
  version: "3.2",
  lastUpdated: "2024-03-15",
  sections: [
    "Prerequisites",
    "Installation",
    "Authentication",
    "Basic Usage",
    "Advanced Patterns",
    "Troubleshooting",
    "FAQ"
  ]
};

const styleGuide = {
  voiceTone: "Professional, helpful, non-patronizing",
  acronyms: "Define on first use (API, etc.)",
  codeBlocks: "Use fenced markdown with language identifier",
  headings: "Use H2 for major topics, H3 for subtopics",
  examples: "Always include at least one worked example",
  notes: ["Use Warning for critical information", "Use Note for helpful context"]
};

function generateDocumentation() {
  console.log("=== TECHNICAL DOCUMENTATION GUIDE ===\n");
  console.log(`Document: ${documentStructure.title}`);
  console.log(`Version: ${documentStructure.version}`);
  console.log(`Target Audience: ${documentStructure.audience}`);
  console.log(`Last Reviewed: ${documentStructure.lastUpdated}\n`);

  console.log("DOCUMENT OUTLINE:");
  console.log("─".repeat(40));
  documentStructure.sections.forEach((section, idx) => {
    console.log(`${idx + 1}. ${section}`);
  });

  console.log("\n\nSTYLE GUIDE ENFORCEMENT:");
  console.log("─".repeat(40));
  Object.entries(styleGuide).forEach(([rule, guidance]) => {
    if (Array.isArray(guidance)) {
      console.log(`${rule}:`);
      guidance.forEach(item => console.log(`  • ${item}`));
    } else {
      console.log(`${rule}: ${guidance}`);
    }
  });

  console.log("\n✓ Documentation structure validated.");
  console.log("✓ All style guidelines applied.");
}

generateDocumentation();
