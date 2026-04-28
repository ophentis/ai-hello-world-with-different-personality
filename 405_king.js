// The Greeting
// A story of code and terror from Maine

function theGreeting() {
  // Sometimes the most terrifying thing is simplicity itself.
  // A message. Just words on a screen. But what lurks beneath?

  const message = "Hello, World!";
  let darkness = null;

  try {
    console.log(message);
    // It's finished. Or is it?
  } catch (error) {
    // All work and no play makes Jack a dull boy.
    darkness = error;
  }

  return message;
}

// The thing in the code is watching.
theGreeting();
