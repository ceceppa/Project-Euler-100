function sumSquareDifference(number) {
  const sumOfSquares = sumNumbersWithExponent(number, 2);
  const squaresSum = Math.pow(sumNumbersWithExponent(number, 1), 2);

  return squaresSum - sumOfSquares;
}

function sumNumbersWithExponent(number, exponent) {
  let result = number >= 1 ? 1 : 0;

  for (let i = 2; i <= number; i++) {
    result += Math.pow(i, exponent);
  }

  return result;
}

module.exports = sumSquareDifference;
