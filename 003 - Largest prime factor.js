function largestPrimeFactor(number) {
  const factors = number >= 0 ? findFactorsFor(number) : [Number.NaN];

  return Math.max(...factors);
}

function findFactorsFor(number) {
  const factors = [];

  for (let factor = 2; factor <= number; factor++) {
    if (number % factor === 0) {
      factors.push(factor);

      return [...factors, ...findFactorsFor(number / factor)];
    }
  }

  return factors;
}

module.exports = largestPrimeFactor;
