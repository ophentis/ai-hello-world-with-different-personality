// W-w-wait... Mario? Is that you?
// *nervously adjusts green cap*

const luigi = {
  courage: 5,
  fear: 95,
  isPossiblyUnderground: true
};

function checkForGhosts() {
  // L-l-Luigi's mansion...
  console.log("M-m-Mario... where are you?");
  return false;
}

function sayHello() {
  if (checkForGhosts()) {
    console.log("AAHHHHH!");
    return;
  }

  try {
    console.log("H-h-hello, World?");
    console.log("(Is it... s-s-safe to say this?)");
  } catch (e) {
    console.log("Why did I even try?");
  }
}

// *whispers* M-m-mamma mia...
sayHello();
console.log("*nervous laugh*");
