// Hippocrates - Father of medicine, "do no harm", ancient Greek physician
// Primum non nocere. First, do no harm.

class Physician {
  constructor() {
    this.oath = "I will do no harm";
  }

  diagnosis() {
    return "Hello, World!";
  }

  treatWithWisdom(treatment) {
    // Consider consequences before acting
    if (this.causeNoHarm(treatment)) {
      return treatment;
    }
  }

  causeNoHarm() {
    // Primum non nocere - First, do no harm
    return true;
  }

  healThyself() {
    console.log(this.diagnosis());
  }
}

const physician = new Physician();
physician.healThyself();

// The oath endures: respect life, cause no injury, practice with wisdom.
