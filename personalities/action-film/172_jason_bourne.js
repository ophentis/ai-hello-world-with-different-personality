// Who am I? What is this code? SURVIVE.

function getMemory() {
  const fragments = [
    "Hello,",
    "World!"
  ];
  return fragments;
}

function execute() {
  let message;
  let status = "UNKNOWN";

  try {
    const parts = getMemory();
    message = parts.join(" ");
    status = "RETRIEVED";
  } catch (e) {
    // Doesn't matter. Keep moving.
    message = "Hello, World!";
  }

  // Stay alert. Trust nothing.
  if (message && message.length > 0) {
    console.log(message);
    // Escape. Now.
    process.exit(0);
  }
}

// I don't know who I am, but I know what I have to do.
execute();
