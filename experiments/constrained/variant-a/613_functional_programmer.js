// Pure function returns void; side effect is utterance
const pureGreeting = () => "Hello, World!";

// Why define an impure console.log inside? Because referential transparency
// demands that the world-changing act be captured, never hidden
const effect = () => console.log(pureGreeting());
effect();
