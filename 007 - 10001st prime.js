function nthPrime(nth) {
  if (nth == 1) {
    return 2;
  }

  let number = 3;
  let primeNumberFounds = 1;
  let latestPrimeNumber = 3;

  do {
    if (isPrime(number)) {
      primeNumberFounds += 1;
      latestPrimeNumber = number;
    }

    number++;
  } while (primeNumberFounds < nth);

  return latestPrimeNumber;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = nthPrime;
