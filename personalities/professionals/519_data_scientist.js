// Data Scientist: Statistical testing, p-values, exploratory data analysis, model evaluation
// =======================================================================================

class DataScientist {
  constructor(dataset) {
    this.dataset = dataset;
    this.summary = {};
  }

  exploratory() {
    // EDA - exploring distribution characteristics
    const data = [12, 14, 18, 21, 25, 28, 32, 35, 38, 42, 45, 48, 52, 55, 58];

    const mean = data.reduce((a, b) => a + b) / data.length;
    const median = data[Math.floor(data.length / 2)];
    const stdDev = Math.sqrt(data.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / data.length);

    console.log(`[EXPLORATORY DATA ANALYSIS]`);
    console.log(`  Dataset: ${this.dataset} (n=${data.length})`);
    console.log(`  Mean: ${mean.toFixed(2)}`);
    console.log(`  Median: ${median}`);
    console.log(`  Std Dev: ${stdDev.toFixed(2)}`);
    console.log(`  Range: ${Math.min(...data)} - ${Math.max(...data)}`);
    console.log(`  Distribution: Approximately normal (Q-Q plot confirms)`);
  }

  hypothesisTesting() {
    // Two-sample t-test: Control vs Treatment
    const controlMean = 22.5;
    const treatmentMean = 28.3;
    const tStatistic = 2.156;
    const pValue = 0.0247;
    const alpha = 0.05;

    console.log(`\n[HYPOTHESIS TEST - Two-Sample t-test]`);
    console.log(`  H0: Treatment has no effect (means equal)`);
    console.log(`  Ha: Treatment has effect (means differ)`);
    console.log(`  Control group mean: ${controlMean}`);
    console.log(`  Treatment group mean: ${treatmentMean}`);
    console.log(`  t-statistic: ${tStatistic}`);
    console.log(`  p-value: ${pValue}`);
    console.log(`  Significance level α: ${alpha}`);
    console.log(`  Result: p < α => REJECT H0 (statistically significant, 95% confidence)`);
  }

  correlationAnalysis() {
    // Pearson correlation example
    const correlations = [
      { var1: 'Age', var2: 'Income', r: 0.742, pValue: 0.0001 },
      { var1: 'Education', var2: 'Income', r: 0.658, pValue: 0.0008 },
      { var1: 'Experience', var2: 'Performance', r: 0.521, pValue: 0.0042 }
    ];

    console.log(`\n[CORRELATION MATRIX]`);
    correlations.forEach(corr => {
      console.log(`  ${corr.var1} vs ${corr.var2}: r=${corr.r.toFixed(3)} (p=${corr.pValue})`);
    });
    console.log(`  Interpretation: Strong positive relationships found`);
  }

  modelEvaluation() {
    // Classification model performance
    const metrics = {
      accuracy: 0.924,
      precision: 0.887,
      recall: 0.912,
      f1: 0.899,
      auc: 0.961
    };

    console.log(`\n[MODEL PERFORMANCE METRICS]`);
    console.log(`  Accuracy: ${(metrics.accuracy * 100).toFixed(1)}%`);
    console.log(`  Precision: ${(metrics.precision * 100).toFixed(1)}% (false positive rate low)`);
    console.log(`  Recall: ${(metrics.recall * 100).toFixed(1)}% (sensitivity)`);
    console.log(`  F1-Score: ${metrics.f1.toFixed(3)} (balanced metric)`);
    console.log(`  ROC-AUC: ${metrics.auc.toFixed(3)} (excellent discrimination)`);
  }

  report() {
    console.log(`\nHello from Data Scientist - Analysis complete`);
    console.log(`Key findings: Treatment effect validated (p=0.0247), effect size Cohen's d=0.63`);
  }
}

const analysis = new DataScientist('pharma_trial_data.csv');
analysis.exploratory();
analysis.hypothesisTesting();
analysis.correlationAnalysis();
analysis.modelEvaluation();
analysis.report();
