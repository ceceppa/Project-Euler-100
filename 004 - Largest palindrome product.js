function largestPalindromeProduct(numberOfDigits) {
  const maxNumber = Math.pow(10, numberOfDigits) - 1;
  const lowestNumber = Math.pow(10, numberOfDigits - 1);
  let biggestNumber = maxNumber;

  for (
    let firstNumber = maxNumber;
    firstNumber >= lowestNumber;
    firstNumber--
  ) {
    for (
      let secondNumber = maxNumber;
      secondNumber >= lowestNumber;
      secondNumber--
    ) {
      const value = firstNumber * secondNumber;

      if (isPalindrome(value) && value > biggestNumber) {
        biggestNumber = value;
      }
    }
  }

  return biggestNumber;
}

function isPalindrome(number) {
  const stringify = '' + number;

  return (
    stringify
      .split('')
      .reverse()
      .join('') === stringify
  );
}

module.exports = largestPalindromeProduct;
