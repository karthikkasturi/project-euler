//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const getFactors = (n) => {
  let mid = Math.sqrt(n);
  if (mid % 1 !== 0) {
    mid = parseInt(mid) + 1;
  }
  for (let i = 2; i <= mid; i++) {
    if (n % i == 0) {
      if (n == i) {
        return [i];
      }
      return [i, ...getFactors(n / i)];
    }
  }
  return [n];
};

const smallestDivisible = (n) => {
  const factors = {};
  for (let i = 2; i <= n; i++) {
    const currFactors = getFactors(i);
    // console.log(i, currFactors)
    const currentFactorMap = currFactors.reduce((res, item) => {
      if (res[item] === undefined) {
        res[item] = 0;
      }
      res[item] += 1;
      return res;
    }, {});

    Object.keys(currentFactorMap).forEach((dig) => {
      const occurrencesInCurrentMap = currentFactorMap[dig];
      if (factors[dig] === undefined) {
        factors[dig] = 0;
      }
      if (occurrencesInCurrentMap > factors[dig]) {
        factors[dig] = occurrencesInCurrentMap;
      }
    });
  }
//   console.log(factors)
  const factorMul = Object.keys(factors).reduce((res, factor) => {
    const factorOccurrences = factors[factor];
    for (let i = 0; i < factorOccurrences; i++) {
      res *= factor;
    }
    return res;
  }, 1);
  return factorMul;
};

console.log(smallestDivisible(20));
