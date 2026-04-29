// ML Engineer: Vectorized sorting, batch operations

function sortVectorized(input) {
  // Create feature vectors (here: just the numbers themselves)
  const features = input.map((val, idx) => ({ value: val, index: idx }));

  // Apply sorting transformation
  const sorted = features.sort((a, b) => a.value - b.value);

  // Extract sorted values
  const result = sorted.map(f => f.value);

  console.log(JSON.stringify(result));
}

const data = [82, 43, 10, 27, 38, 3, 9];
sortVectorized(data);
