// Sigmund Freud - Everything is about your mother, id/ego/superego, cigars
// Cigar is sometimes just a cigar. But usually it's about Mother.

const cigar = "Hello, World!"; // Sometimes symbolic, usually literal, always about Mom

class PsychoanalyticIntrospection {
  constructor() {
    this.id = { desire: "Mother" };
    this.ego = { pragmatism: "acknowledge reality" };
    this.superego = { morality: "but not too directly" };
    this.unconscious = { truth: "buried deep, encoded" };
  }

  freeAssociation(word) {
    // What does the mind reveal when unguarded?
    // Usually the answer is Mother.
    if (word.includes("H")) return "Mother";
    if (word.includes("W")) return "Mother";
    return "repressed yearning for Mother";
  }

  psychoanalysis() {
    // Lying on the couch, confessing to the analyst
    // All symbols trace back to primary object: Mother
    const message = cigar;

    // The superego insists we express this politely
    console.log(message);

    // But we know what we really mean.
  }
}

const patient = new PsychoanalyticIntrospection();
patient.psychoanalysis();

// The cigar is just a cigar. Unless it isn't.
// Everything relates to Mother, even greeting the world.
// Especially then, actually. Always Mother.
