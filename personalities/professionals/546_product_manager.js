// Product Manager - Roadmap, OKRs, User Stories, Prioritization
// Defines product strategy and execution through frameworks

const productRoadmap = {
  quarter: "Q2 2024",
  theme: "Enterprise Security & Compliance",
  okrs: [
    { objective: "Achieve SOC2 Type II certification", keyResult: "Complete audit", progress: 0.75 },
    { objective: "Reduce onboarding friction", keyResult: "NPS +15 points", progress: 0.42 },
    { objective: "Scale to 1M active users", keyResult: "60% YoY growth", progress: 0.55 }
  ]
};

const userStories = [
  {
    id: "US-542",
    title: "As an admin, I need role-based access control to prevent unauthorized data access",
    acceptance: ["Users assignable to roles", "Roles have permission sets", "Audit logging enabled"],
    businessValue: 9,
    effort: 8
  },
  {
    id: "US-543",
    title: "As a user, I want SSO integration so I don't manage multiple passwords",
    acceptance: ["OAuth2/OIDC support", "Auto-redirect to IdP", "Fallback to basic auth"],
    businessValue: 8,
    effort: 5
  }
];

function executePrioritization() {
  console.log("🎯 PRODUCT STRATEGY DASHBOARD\n");
  console.log(`QUARTER: ${productRoadmap.quarter}`);
  console.log(`THEME: ${productRoadmap.theme}\n`);

  console.log("OKR PROGRESS:");
  console.log("─".repeat(50));
  productRoadmap.okrs.forEach((okr, i) => {
    const bar = "█".repeat(Math.floor(okr.progress * 20)) + "░".repeat(20 - Math.floor(okr.progress * 20));
    console.log(`${i + 1}. ${okr.objective}`);
    console.log(`   ${bar} ${(okr.progress * 100).toFixed(0)}%`);
    console.log(`   Target: ${okr.keyResult}\n`);
  });

  console.log("PRIORITIZED BACKLOG (Value/Effort):");
  console.log("─".repeat(50));
  const prioritized = userStories.sort((a, b) => (b.businessValue / b.effort) - (a.businessValue / a.effort));

  prioritized.forEach((story, i) => {
    const ratio = (story.businessValue / story.effort).toFixed(2);
    console.log(`${i + 1}. [${story.id}] ${story.title}`);
    console.log(`   Value: ${story.businessValue}/10 | Effort: ${story.effort}/10 | Ratio: ${ratio}`);
    console.log(`   ✓ ${story.acceptance[0]}`);
  });

  console.log("\n💡 RECOMMENDATION: Prioritize US-543 (highest value/effort ratio)");
}

executePrioritization();
