// Create a counter that tracks elapsed time in milliseconds
// This starts counting immediately when the script runs
const startTime = Date.now(); // Store the timestamp when program starts
console.log(startTime);

// Function to get the current elapsed time in milliseconds
function getElapsedTimeMs() {
  return Date.now() - startTime;
}
console.log(getElapsedTimeMs());

// Example usage:
console.log("Program started, counter running automatically...");

// Example of checking the counter at specific times
setTimeout(() => {
  const elapsed = getElapsedTimeMs();
  console.log(`After ~1 second, elapsed time: ${elapsed}ms`); // Should be ~1000ms
}, 1000);

setTimeout(() => {
  const elapsed = getElapsedTimeMs();
  console.log(`After ~4.5 seconds, elapsed time: ${elapsed}ms`); // Should be ~4500ms
}, 10000);

// If you want to access the elapsed time at any point in your code:
// const currentElapsedMs = getElapsedTimeMs();

// If you need a continuously updating variable that always has the current elapsed time:
let elapsedTimeMs = 0;
setInterval(() => {
  elapsedTimeMs = getElapsedTimeMs();
  // This variable now continuously updates with the elapsed milliseconds
}, 10); // Updates every 10ms for accuracy