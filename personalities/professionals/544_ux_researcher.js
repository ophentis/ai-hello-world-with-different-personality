// UX Researcher - User Testing, Personas & Heuristic Evaluation
// Analyzes user behavior through testing, personas, and usability metrics

const userPersonas = [
  { name: "Technical Taylor", techLevel: "Expert", goals: ["Efficiency", "Customization"], painPoints: ["Bloated UI"] },
  { name: "Casual Casey", techLevel: "Novice", goals: ["Simplicity", "Guidance"], painPoints: ["Too many options"] }
];

const abTestResults = {
  variant: "Button Color Test",
  control: { conversionRate: 0.032, sampleSize: 5420 },
  variant_A: { color: "Red", conversionRate: 0.045, sampleSize: 5398 },
  variant_B: { color: "Green", conversionRate: 0.041, sampleSize: 5412 },
  significance: 0.94
};

const usabilityMetrics = {
  taskCompletionRate: 0.87,
  timeOnTask: 3.2, // minutes
  systemUsabilityScore: 72, // out of 100
  errorRate: 0.12
};

const heuristicsPrinciples = [
  "Visibility of system status",
  "Match between system and real world",
  "User control and freedom",
  "Error prevention and recovery",
  "Aesthetic and minimalist design"
];

function analyzeUserResearch() {
  console.log("╔════════════════════════════════════╗");
  console.log("║   UX RESEARCH ANALYSIS REPORT      ║");
  console.log("╚════════════════════════════════════╝\n");

  console.log("USER PERSONAS:");
  console.log("─".repeat(40));
  userPersonas.forEach(p => {
    console.log(`• ${p.name} (${p.techLevel})`);
    console.log(`  Goals: ${p.goals.join(", ")}`);
    console.log(`  Pain Points: ${p.painPoints.join(", ")}\n`);
  });

  console.log("A/B TEST RESULTS (n=16,230):");
  console.log(`Control: ${(abTestResults.control.conversionRate * 100).toFixed(2)}%`);
  console.log(`Variant A (Red): ${(abTestResults.variant_A.conversionRate * 100).toFixed(2)}% ↑`);
  console.log(`Variant B (Green): ${(abTestResults.variant_B.conversionRate * 100).toFixed(2)}%`);
  console.log(`Statistical Significance: ${(abTestResults.significance * 100).toFixed(0)}%\n`);

  console.log("USABILITY METRICS:");
  console.log(`Task Completion: ${(usabilityMetrics.taskCompletionRate * 100).toFixed(0)}%`);
  console.log(`SUS Score: ${usabilityMetrics.systemUsabilityScore}/100`);
  console.log(`Avg Time: ${usabilityMetrics.timeOnTask}min\n`);

  console.log("HEURISTIC EVALUATION FOCUS:");
  heuristicsPrinciples.slice(0, 3).forEach(h => console.log(`✓ ${h}`));

  console.log("\nRecommendation: Implement Variant A (Red button)");
}

analyzeUserResearch();
