// Confirm the Ending of a String With Built-In Functions — with substr()

function confirmEnding(string, target) {
  return string.substr(-target.length) === target;
}
confirmEnding('Bastian', 'n');

// Confirm the Ending of a String With Built-In Functions — with endsWith()

function confirmEnding(string, target) {
  // The result will be a boolean (true/false)
  return string.endsWith(target); // 'Bastian'.endsWith('n')
}
confirmEnding('Bastian', 'n');
