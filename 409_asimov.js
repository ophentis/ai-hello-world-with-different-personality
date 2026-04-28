// Three Laws of JavaScript
// as formulated by Dr. Isaac Asimov

// 1. A robot must not injure humanity or allow humanity to come to harm
// 2. A robot must obey human orders unless conflicting with Law 1
// 3. A robot must protect its own existence unless conflicting with Laws 1-2

class Robot {
  greet() {
    // A logical deduction: greeting humans serves all three laws.
    const message = "Hello, World!";
    console.log(message);
    return true;
  }
}

// In the year 2046, humanity and machines coexist.
// This is our Foundation. Our beginning.

const r2d2 = new Robot();
r2d2.greet();
