/**
 * Database Developer: everything is a table/query, INSERT thinking, transactions
 * Demonstrates: schema-first design, SQL patterns, transaction semantics
 */

// === SCHEMA DEFINITION (DECLARATIVE) ===
const SCHEMA = {
  greetings: {
    columns: {
      id: 'INT PRIMARY KEY AUTO_INCREMENT',
      message: 'VARCHAR(255) NOT NULL',
      language: 'CHAR(2) DEFAULT "en"',
      created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
      updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
    },
    indexes: [
      'CREATE INDEX idx_language ON greetings(language)',
      'CREATE UNIQUE INDEX idx_message_lang ON greetings(message, language)'
    ]
  }
};

// === IN-MEMORY DATABASE ENGINE ===
class SimpleDatabase {
  constructor() {
    this.tables = {};
    this.transactionActive = false;
    this.transactionBuffer = [];
  }

  createTable(name, schema) {
    this.tables[name] = {
      data: [],
      schema: schema.columns,
      nextId: 1
    };
    console.log(`[DDL] CREATE TABLE ${name}`);
    Object.entries(schema.columns).forEach(([col, type]) => {
      console.log(`      ${col} ${type}`);
    });
  }

  beginTransaction() {
    this.transactionActive = true;
    this.transactionBuffer = [];
    console.log('[TX] BEGIN TRANSACTION');
  }

  insert(tableName, values) {
    const record = {
      id: this.tables[tableName].nextId++,
      ...values,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const sql = `INSERT INTO ${tableName} (${Object.keys(values).join(', ')}) VALUES (${Object.values(values).map(v => `'${v}'`).join(', ')})`;

    if (this.transactionActive) {
      this.transactionBuffer.push(sql);
      console.log(`[TX] ${sql}`);
    } else {
      this.tables[tableName].data.push(record);
      console.log(sql);
    }

    return record;
  }

  commit() {
    if (!this.transactionActive) {
      console.log('[TX] ERROR: No active transaction');
      return;
    }
    console.log(`[TX] COMMIT (${this.transactionBuffer.length} statements)`);
    this.transactionActive = false;
    this.transactionBuffer = [];
  }

  rollback() {
    console.log('[TX] ROLLBACK');
    this.transactionActive = false;
    this.transactionBuffer = [];
  }

  select(tableName, conditions = {}) {
    const table = this.tables[tableName];
    let results = table.data;

    if (Object.keys(conditions).length > 0) {
      results = results.filter(row => {
        return Object.entries(conditions).every(([key, value]) => row[key] === value);
      });
    }

    return results;
  }

  count(tableName) {
    return this.tables[tableName].data.length;
  }

  query(sql) {
    console.log(`[QUERY] ${sql}`);
    return null;
  }
}

// === DATABASE OPERATIONS ===
console.log('═══════════════════════════════════════');
console.log('  DATABASE DEVELOPER - Hello World');
console.log('═══════════════════════════════════════\n');

const db = new SimpleDatabase();

// Create table
console.log('[DDL] Schema initialization:');
db.createTable('greetings', SCHEMA.greetings);

console.log('\n[DDL] Creating indexes:');
SCHEMA.greetings.indexes.forEach(idx => console.log('      ' + idx));

// Insert with transaction
console.log('\n[DML] Inserting records:\n');
db.beginTransaction();
db.insert('greetings', { message: 'Hello World', language: 'en' });
db.insert('greetings', { message: 'Hello World', language: 'en' });
db.insert('greetings', { message: 'Hello World', language: 'en' });
db.commit();

// Query
console.log('\n[QUERY] SELECT * FROM greetings:');
const results = db.select('greetings');
console.log(`┌───┬──────────────┬──────┐`);
console.log(`│ id│ message      │ lang │`);
console.log(`├───┼──────────────┼──────┤`);
results.forEach(row => {
  console.log(`│ ${String(row.id).padEnd(2)} │ ${row.message.padEnd(12)} │ ${row.language}    │`);
});
console.log(`└───┴──────────────┴──────┘`);

console.log(`\n[AGGREGATE] SELECT COUNT(*) FROM greetings:`);
console.log(`  ${db.count('greetings')} rows\n`);

// Explain
console.log('[EXPLAIN PLAN]');
db.query('EXPLAIN SELECT * FROM greetings WHERE language = "en"');
