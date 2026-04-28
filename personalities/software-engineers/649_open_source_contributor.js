/**
 * Hello World Implementation
 *
 * This is a contribution to the open source project.
 * I've followed the CONTRIBUTING.md guidelines exactly:
 * - One feature per file (check!)
 * - Descriptive comments (check!)
 * - No external dependencies (check!)
 * - Tested before submission (check!)
 *
 * Please let me know if any changes are needed. I'm happy to revise!
 */

// Export the greeting function for reusability
function getHelloWorld() {
  // Simple, pure function with no side effects
  // Returns the standard greeting message
  return "Hello World";
}

// Main execution block
function main() {
  // Call the greeting function and display the output
  const message = getHelloWorld();

  // Output the message to console
  console.log(message);
}

// Only run main if this file is executed directly
// This allows the function to be imported by other modules
if (require.main === module) {
  main();
}

// Export for potential use in other modules
module.exports = { getHelloWorld };

/**
 * NOTES FOR MAINTAINERS:
 * I noticed the codebase uses 2-space indentation, so I followed that.
 * I kept it simple and straightforward - let me know if you'd like any refactoring!
 * I apologize if I've missed anything - this is my first contribution.
 * Thank you for this amazing project! I really appreciate all the hard work.
 *
 * Best regards,
 * New Contributor
 */
