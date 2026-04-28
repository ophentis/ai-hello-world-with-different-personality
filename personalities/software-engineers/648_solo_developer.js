// Solo dev: handle everything
// DB connection? Not needed. Auth? Keep it simple. Config? Hardcoded is fine for now.

const greeting = "Hello World";

// Output it
console.log(greeting);

// Also log to a "log file" (just a string for now, we'll set up proper logging later)
// Actually, this is dev only so console.log is fine

// TODO: remember to add this to the README when I write it
// TODO: update the deploy script to include this file
// TODO: maybe add a version number somewhere
// TODO: test this actually works in production (do it manually via SSH)

// Performance note: This runs instantly, which is good
// Future: could cache the greeting in memory if performance becomes an issue
//         (though it definitely won't, but let's keep it in the back of our mind)

// Security: no user input, no vulnerability vectors
// Cost: minimal compute time, no dependencies to pay for

// I'll deploy this to prod myself via the bash script I have
// Don't bother with formal release notes - just push it
