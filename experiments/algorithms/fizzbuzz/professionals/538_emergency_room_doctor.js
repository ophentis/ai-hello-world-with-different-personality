// Emergency room doctor: triage, rapid assessment, stabilize
class TriageSystem {
  constructor() {
    this.patients = [];
  }

  triagePatient(patientId) {
    // Severity: stable (3), urgent (5), critical (15)
    if (patientId % 15 === 0) return 'FizzBuzz'; // Resuscitation
    if (patientId % 3 === 0) return 'Fizz';     // Emergent
    if (patientId % 5 === 0) return 'Buzz';     // Urgent
    return String(patientId);                    // Waiting room
  }

  processQueue(queueSize) {
    for (let i = 1; i <= queueSize; i++) {
      const triage = this.triagePatient(i);
      this.patients.push(triage);
      console.log(triage);
    }
  }
}

new TriageSystem().processQueue(100);
