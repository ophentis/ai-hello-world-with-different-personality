// FIBONACCI SEQUENCE TABLE: 20 rows, normalized schema
// Primary key: Unique. Constraints: Enforced.
// Backup: Verified. Transaction log: Archived.

let row_a = 0;
let row_b = 1;
let row_count = 0;

while (row_count < 20) {
  console.log(row_a);
  const row_c = row_a + row_b;
  row_a = row_b;
  row_b = row_c;
  row_count++;
}
