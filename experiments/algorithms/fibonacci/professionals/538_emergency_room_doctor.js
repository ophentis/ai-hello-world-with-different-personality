// Emergency room doctor: patient load buildup via Fibonacci surge
class SurgeCapacity {
  constructor(hours = 20) {
    this.hours = hours;
  }

  projectPatientSurge() {
    // ER census growth during surge follows Fibonacci pattern
    const patients = [0, 1];
    for (let h = 2; h < this.hours; h++) {
      patients.push(patients[h - 1] + patients[h - 2]);
    }
    return patients;
  }

  reportCensus() {
    const patients = this.projectPatientSurge();
    patients.forEach(p => console.log(p));
  }
}

new SurgeCapacity(20).reportCensus();
