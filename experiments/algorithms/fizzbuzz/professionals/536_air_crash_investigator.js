// Air crash investigator: black box data, causal chains, sequence events
class AccidentInvestigation {
  constructor() {
    this.eventLog = [];
  }

  analyzeEvent(sequenceNumber) {
    // Event chains: pilot error (3), mechanical (5), combined (15)
    if (sequenceNumber % 15 === 0) return 'FizzBuzz'; // Cascading failure
    if (sequenceNumber % 3 === 0) return 'Fizz';     // Pilot action
    if (sequenceNumber % 5 === 0) return 'Buzz';     // System failure
    return String(sequenceNumber);                    // Environmental
  }

  reconstructAccident(eventCount) {
    for (let e = 1; e <= eventCount; e++) {
      const event = this.analyzeEvent(e);
      this.eventLog.push(event);
      console.log(event);
    }
  }
}

new AccidentInvestigation().reconstructAccident(100);
