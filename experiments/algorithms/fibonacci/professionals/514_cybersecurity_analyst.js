// BREACH RISK ESCALATION: 20-step fibonacci threat model
// Anomaly detection: Active. Intrusion likelihood: Calculated.
// Containment: Ready. Response team: On standby.

let risk_a = 0;
let risk_b = 1;
let check = 0;

while (check < 20) {
  console.log(risk_a);
  const risk_c = risk_a + risk_b;
  risk_a = risk_b;
  risk_b = risk_c;
  check++;
}
