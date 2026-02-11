const prompt = require('prompt-sync')();

const choice = prompt('fibs(f) or fibsRec(fr): ');
const cf = choice === 'f';
const cfr = choice === 'fr';
if (cf || cfr) {
  const len = prompt('Length of sequence (0 <= integer <= 104): ');
  const n = Number(len);
  if (!Number.isInteger(n)) {
    console.log('Length must be an integer.');
  } else if (n < 0 || n > 104) {
    console.log('Length must be between 0 and 104.');
  } else {
    if (cf) {
      fibs(n);
    } else {
      fibsRec(n);
    }
  }
} else {
  console.log("You must enter 'f' or 'fr'.");
}

function fibLoop(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function fibs(n) {
  const fib = fibLoop(n);
  console.log(`[${fib.join(', ')}]`);
}

function fibArray(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibArray(n - 1);
  const next = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, next];
}

function fibsRec(n) {
  const fib = fibArray(n);
  console.log(`[${fib.join(', ')}]`);
}
