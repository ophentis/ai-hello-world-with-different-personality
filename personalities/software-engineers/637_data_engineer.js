/**
 * Data Engineer: ETL pipeline thinking, batch processing, schema validation
 * Demonstrates: extract, transform, load stages, schema validation, batch operations
 */

// === SCHEMA DEFINITION ===
const GREETING_SCHEMA = {
  id: { type: 'integer', required: true },
  message: { type: 'string', required: true, maxLength: 255 },
  language: { type: 'string', default: 'en' },
  timestamp: { type: 'timestamp', required: true }
};

// === EXTRACT STAGE ===
const extractRawData = () => {
  console.log('[PIPELINE] EXTRACT: Reading from source...');
  return [
    { raw_message: 'Hello World', lang: 'en', source_ts: Date.now() },
    { raw_message: 'Hello World', lang: 'en', source_ts: Date.now() }
  ];
};

// === TRANSFORM STAGE ===
const validateSchema = (record, schema) => {
  for (const [field, rules] of Object.entries(schema)) {
    if (rules.required && !(field in record)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  return true;
};

const transformData = (rawRecords) => {
  console.log('[PIPELINE] TRANSFORM: Applying transformations...');
  return rawRecords.map((record, idx) => ({
    id: idx + 1,
    message: record.raw_message.toUpperCase(),
    language: record.lang || 'en',
    timestamp: new Date(record.source_ts).toISOString(),
    hash: Math.abs(Math.random() * 999999 | 0)
  }));
};

// === LOAD STAGE ===
const loadData = (records) => {
  console.log('[PIPELINE] LOAD: Writing to target...');
  records.forEach((record, idx) => {
    console.log(`  INSERT INTO greetings VALUES (${record.id}, '${record.message}', '${record.language}', '${record.timestamp}')`);
  });
  console.log(`[PIPELINE] Loaded ${records.length} records`);
  return records.length;
};

// === BATCH PROCESSING ===
const runETLPipeline = () => {
  const startTime = Date.now();
  console.log('[PIPELINE] Starting ETL batch job...\n');

  try {
    // Extract
    const raw = extractRawData();
    console.log(`  Extracted: ${raw.length} raw records\n`);

    // Transform
    const transformed = transformData(raw);
    transformed.forEach(t => validateSchema(t, GREETING_SCHEMA));
    console.log(`  Transformed: ${transformed.length} validated records\n`);

    // Load
    const loaded = loadData(transformed);
    console.log(`\n[PIPELINE] SUCCESS: ${loaded} rows written\n`);

    const duration = Date.now() - startTime;
    console.log(`[METRICS] Duration: ${duration}ms | Throughput: ${(loaded / duration * 1000).toFixed(2)} rows/sec`);
  } catch (err) {
    console.error(`[PIPELINE] ERROR: ${err.message}`);
  }
};

// === EXECUTE ===
runETLPipeline();
