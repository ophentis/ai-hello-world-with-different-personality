// ugh... whatever
let game_running = true;
let sanity = 5;

function scratch_neck() {
  sanity -= 5;
  if (sanity <= 0) {
    console.log("Hello, World!");
    disintegrate_everything();
  }
}

function disintegrate_everything() {
  game_running = false;
  console.log("*scratches neck aggressively*");
}

// I hate this so much
for (let i = 0; i < 100; i++) {
  if (i === 42) {
    scratch_neck();
    if (!game_running) break;
  }
}

// this world is garbage anyway
if (sanity <= 0) {
  console.log("*scratches neck* ...erased");
}
