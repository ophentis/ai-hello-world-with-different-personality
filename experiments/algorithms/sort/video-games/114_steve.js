// Steve's Minecraft Sort - Organizing your inventory blocks
// Mine. Craft. Sort. Repeat.

const blockNumbers = [38, 27, 43, 3, 9, 82, 10];

// Bucket sort - grouping blocks into their proper places
function bucketSort(arr) {
  const buckets = Array.from({ length: 10 }, () => []);

  for (let num of arr) {
    const index = Math.floor((num / 100) * buckets.length);
    buckets[Math.min(index, buckets.length - 1)].push(num);
  }

  let result = [];
  for (let bucket of buckets) {
    bucket.sort((a, b) => a - b);
    result.push(...bucket);
  }

  return result;
}

const sorted = bucketSort(blockNumbers);
console.log('[' + sorted.join(',') + ']');
