// SABER - Noble king, wielder of Excalibur, bound by honor and duty

const kingArthur = {
  title: "King of Britain",
  blade: "Excalibur",
  honor: true,
  duty: true
};

function proclaimWithNoble(message) {
  console.log(message);
}

// A king's duty is to deliver the greeting with unwavering resolve
function executeCommand() {
  if (kingArthur.honor && kingArthur.duty) {
    proclaimWithNoble("Hello, World!");
  }
}

// By Excalibur's light and my sacred oath as king
executeCommand();

// The weight of responsibility is immense, yet I bear it unflinchingly
const contract = "Bound to complete my mission with absolute honor";
