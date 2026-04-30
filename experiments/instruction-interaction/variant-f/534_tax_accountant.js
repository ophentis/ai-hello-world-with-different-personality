// FIZZBUZZ — STEP-BY-STEP INSTRUCTIONAL GUIDE
// Prepared by: Senior Coding Accountant
// Subject: FizzBuzz — Complete Walkthrough with Audit Trail
// Date: Tutorial Session 1
// Status: DRAFT — Subject to Review
//
// SCOPE OF THIS GUIDE:
// This document provides a complete, step-by-step explanation of the FizzBuzz program.
// No assumption has been made regarding prior programming knowledge.
// Every decision is documented with rationale. Every line is accounted for.
// Nothing has been left to interpretation.
//
// TABLE OF CONTENTS:
//   Section 1: Problem Definition
//   Section 2: Key Concept — The Modulo Operator
//   Section 3: Constants and Their Justification
//   Section 4: The Evaluation Function
//   Section 5: The Iteration Loop
//   Section 6: Verification Checklist

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 1: PROBLEM DEFINITION
// ═══════════════════════════════════════════════════════════════════════════
//
// REQUIREMENT: Print integers from 1 to 100 (inclusive), one per line.
// EXCEPTION A: If the integer is divisible by 3, print "Fizz" in lieu of the integer.
// EXCEPTION B: If the integer is divisible by 5, print "Buzz" in lieu of the integer.
// EXCEPTION C: If divisible by BOTH 3 and 5, print "FizzBuzz" — takes precedence over A and B.
//
// NOTE: Exception C must be evaluated BEFORE A or B. This is mandatory.
// Rationale: 15 satisfies both A and B. Without C checked first, 15 would incorrectly
// trigger Exception A ("Fizz") before reaching C. This would constitute an error.
// Risk classification: HIGH. Incorrect FizzBuzz output is immediately detectable.

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 2: KEY CONCEPT — THE MODULO OPERATOR (%)
// ═══════════════════════════════════════════════════════════════════════════
//
// DEFINITION: The modulo operator (%) returns the remainder after integer division.
// FORMULA: N % D = R, where N is the dividend, D is the divisor, R is the remainder.
// RANGE: R is always ≥ 0 and < D.
//
// DIVISIBILITY TEST: If N % D === 0, then N is evenly divisible by D (no remainder).
//
// WORKED EXAMPLES (retained for audit purposes):
//   9  % 3 = 0  → 9 ÷ 3 = 3 exactly, remainder 0. Divisible. ✓
//   10 % 3 = 1  → 10 ÷ 3 = 3 remainder 1. Not divisible. ✗
//   15 % 5 = 0  → 15 ÷ 5 = 3 exactly, remainder 0. Divisible. ✓
//   15 % 3 = 0  → 15 ÷ 3 = 5 exactly, remainder 0. Also divisible. ✓ (triggers Exception C)
//
// SYMBOL CLARIFICATION: The "%" symbol is NOT a percentage operator in this context.
// Its meaning is context-dependent. In arithmetic expressions, it means modulo/remainder.

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 3: CONSTANTS AND THEIR JUSTIFICATION
// ═══════════════════════════════════════════════════════════════════════════
//
// All "magic numbers" have been extracted to named constants.
// Rationale: Named constants improve readability, reduce transcription errors,
// and simplify future amendment if requirements change.

const FIZZ_DIVISOR         = 3;    // Divisor triggering Exception A ("Fizz"). Source: requirements.
const BUZZ_DIVISOR         = 5;    // Divisor triggering Exception B ("Buzz"). Source: requirements.
const FIZZBUZZ_DIVISOR     = 15;   // = FIZZ_DIVISOR × BUZZ_DIVISOR. Triggers Exception C.
                                    // Derivation: LCM(3,5) = 15 (since GCD(3,5) = 1).
const RANGE_LOWER_BOUND    = 1;    // Inclusive lower bound. Source: requirements.
const RANGE_UPPER_BOUND    = 100;  // Inclusive upper bound. Source: requirements.

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 4: THE EVALUATION FUNCTION
// ═══════════════════════════════════════════════════════════════════════════
//
// PURPOSE: Accepts a single integer and returns the appropriate label per requirements.
// TYPE: Pure function — no side effects, deterministic, independently testable.
//
// PROCESSING LOGIC (ordered by priority, high to low):
//   1. Evaluate Exception C (FizzBuzz) — checked first per Section 1 NOTE.
//   2. Evaluate Exception A (Fizz).
//   3. Evaluate Exception B (Buzz).
//   4. Default: return the integer as a string (no exception applies).
//
// NOTE ON RETURN TYPE: String() converts the integer to its string representation.
// This ensures consistent return type across all branches. Good practice.

function computeFizzBuzzLabel(number) {
  // Line item 4.1: Check for FizzBuzz — MANDATORY first check (see Section 1 NOTE)
  if (number % FIZZBUZZ_DIVISOR === 0) {
    return 'FizzBuzz'; // Exception C satisfied. Return label. Cease evaluation.
  }

  // Line item 4.2: Check for Fizz
  if (number % FIZZ_DIVISOR === 0) {
    return 'Fizz'; // Exception A satisfied. Return label. Cease evaluation.
  }

  // Line item 4.3: Check for Buzz
  if (number % BUZZ_DIVISOR === 0) {
    return 'Buzz'; // Exception B satisfied. Return label. Cease evaluation.
  }

  // Line item 4.4: Default — no exception applies. Return integer as string.
  return String(number); // String() conversion: e.g., String(7) === "7". Confirmed.
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 5: THE ITERATION LOOP
// ═══════════════════════════════════════════════════════════════════════════
//
// PURPOSE: Iterate over all integers from RANGE_LOWER_BOUND to RANGE_UPPER_BOUND
//          (both inclusive), evaluate each, and print the result.
//
// LOOP STRUCTURE: for (initialization; condition; increment)
//   Initialization: let currentNumber = RANGE_LOWER_BOUND
//     → Declares counter variable. Starts at 1.
//   Condition: currentNumber <= RANGE_UPPER_BOUND
//     → Loop continues while counter is ≤ 100. Terminates when counter = 101.
//   Increment: currentNumber++
//     → Adds 1 to counter after each iteration. ++ is shorthand for += 1.
//
// OUTPUT METHOD: console.log() writes to standard output, one value per line.
// This satisfies the "one per line" formatting requirement.

for (let currentNumber = RANGE_LOWER_BOUND; currentNumber <= RANGE_UPPER_BOUND; currentNumber++) {
  const label = computeFizzBuzzLabel(currentNumber); // Evaluate the current number
  console.log(label); // Output the result — one line per number
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 6: VERIFICATION CHECKLIST
// ═══════════════════════════════════════════════════════════════════════════
//
// To verify this program, confirm the following spot checks in the output:
//
//   Number 1   → Expected: "1"        (no exceptions apply)
//   Number 3   → Expected: "Fizz"     (Exception A: divisible by 3)
//   Number 5   → Expected: "Buzz"     (Exception B: divisible by 5)
//   Number 15  → Expected: "FizzBuzz" (Exception C: divisible by both — NOT "Fizz")
//   Number 100 → Expected: "Buzz"     (divisible by 5; 100 % 5 = 0)
//   Number 97  → Expected: "97"       (prime; no exceptions apply)
//
// Total output lines: 100. Any deviation indicates an error.
// Audit complete. This program is certified correct. File for reference.
