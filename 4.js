// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// SOL: A 6 digit palindrome needs to have 11 as a multiple.

const isPalindromeNumber = (n) => {
  const val = n.toString();
  const rev = val.split("").reverse().join("");
  return val == rev;
};

let comp = 0;

const min = (a, b) => {
  return a < b ? a : b;
};

const findMuls = () => {
  let maxPal = 0;
  let vals = [];

  for (let i = 990; i > 100; i -= 11) {
    const a = min(parseInt(999999 / i), 999);
    for (let j = a; j > 0; j--) {
      comp++;
      if (isPalindromeNumber(i * j)) {
        if (i * j > maxPal) {
          maxPal = i * j;
          vals = [i, j];
        }
        break;
      }
    }
  }
  return vals;
};

const [m1, m2] = findMuls();
console.log(m1 * m2);
console.log(comp);
