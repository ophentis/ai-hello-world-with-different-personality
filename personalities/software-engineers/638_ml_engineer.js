/**
 * ML Engineer: numpy-style array thinking, model prediction, feature extraction
 * Demonstrates: training metaphors, feature engineering, model.predict() pattern
 */

// === FEATURE EXTRACTION ===
class FeatureExtractor {
  static extractFeatures(text) {
    // Convert text to feature vector (simplified word embeddings)
    const words = text.toLowerCase().split(' ');
    const features = new Float32Array(128);

    words.forEach((word, idx) => {
      const hash = word.split('').reduce((h, c) => h + c.charCodeAt(0), 0);
      features[hash % 128] = (features[hash % 128] || 0) + (1 / words.length);
    });

    return features;
  }

  static normalize(features) {
    const magnitude = Math.sqrt(Array.from(features).reduce((sum, x) => sum + x * x, 0));
    return new Float32Array(Array.from(features).map(x => x / (magnitude || 1)));
  }
}

// === MODEL ===
class GreetingModel {
  constructor() {
    this.weights = new Float32Array(128).fill(0.5);
    this.bias = 0.1;
    this.epochs = 0;
  }

  // Forward pass (prediction)
  predict(features) {
    let logits = this.bias;
    for (let i = 0; i < features.length; i++) {
      logits += features[i] * this.weights[i];
    }
    return 1 / (1 + Math.exp(-logits)); // Sigmoid
  }

  // Training
  fit(trainingData, labels, epochs = 3) {
    console.log(`[TRAINING] Starting with ${epochs} epochs...`);
    for (let epoch = 0; epoch < epochs; epoch++) {
      let loss = 0;
      trainingData.forEach((features, idx) => {
        const pred = this.predict(features);
        const label = labels[idx];
        const error = label - pred;
        loss += error * error;

        // Update weights (simplified gradient descent)
        for (let i = 0; i < this.weights.length; i++) {
          this.weights[i] += 0.01 * error * features[i];
        }
      });
      this.epochs++;
      console.log(`  Epoch ${epoch + 1}/${epochs} | Loss: ${(loss / trainingData.length).toFixed(4)}`);
    }
    console.log(`[TRAINING] Complete. Model accuracy metrics computed.`);
  }

  predict_batch(batch) {
    return batch.map(features => this.predict(features));
  }
}

// === TRAINING DATA ===
const trainingTexts = [
  'Hello World',
  'Hello World',
  'Hello World'
];

const trainingLabels = [1, 1, 1]; // Positive class

// === TRAINING PIPELINE ===
console.log('[ML PIPELINE] Greeting Classifier v1.0\n');

console.log('[FEATURE ENGINEERING] Extracting features...');
const trainingFeatures = trainingTexts.map(text => {
  const raw = FeatureExtractor.extractFeatures(text);
  return FeatureExtractor.normalize(raw);
});

console.log(`  Generated {${trainingFeatures[0].length}} dimensional vectors\n`);

console.log('[MODEL] Initializing...');
const model = new GreetingModel();

console.log('[MODEL] Training...\n');
model.fit(trainingFeatures, trainingLabels, 3);

console.log(`\n[INFERENCE] Predicting on "Hello World"...`);
const testFeatures = FeatureExtractor.normalize(FeatureExtractor.extractFeatures('Hello World'));
const prediction = model.predict(testFeatures);
console.log(`  Confidence: ${(prediction * 100).toFixed(2)}%`);
console.log(`  Classification: ${ prediction > 0.5 ? 'GREETING' : 'OTHER'}`);
