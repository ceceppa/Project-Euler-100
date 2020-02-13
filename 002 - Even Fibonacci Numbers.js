function fibonacciEvenSum(number) {
  return generateFibonacciSeries(number).reduce(function sumEvenOnly(
    previous,
    value
  ) {
    const v = value % 2 === 0 ? value : 0;

    return previous + v;
  },
  0);
}

function generateFibonacciSeries(number) {
  const fibonacci = [0, 1];

  for (let i = 2; i <= number; i++) {
    const sum = fibonacci[i - 2] + fibonacci[i - 1];

    if (sum > number) {
      break;
    }

    fibonacci[i] = sum;
  }

  return fibonacci;
}

module.exports = fibonacciEvenSum;
