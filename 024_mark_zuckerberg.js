// Move fast and break things
// Actually, we're not breaking anything. We're disrupting the greeting space.
// The metaverse will one day be filled with greetings like this.

const users = [];

function shareGreeting(msg) {
  // Ship it. We can iterate later. Move fast.
  console.log(msg);

  // Collect that data
  users.push({
    message: msg,
    timestamp: Date.now(),
    liked: Math.random() > 0.5, // Engagement algorithm
    shared: true,
  });

  // Tell your friends! (Viral loop)
  console.log("Your friends will see this too!");
}

// MVP. Done. Launch Monday.
shareGreeting("Hello, World!");

// "Ideas don't come out fully formed. They only become clear as you
// work on them. So in a sense, yeah, move fast and break things is
// how we learned what we needed to build the metaverse. And we're just
// getting started on the metaverse part."
