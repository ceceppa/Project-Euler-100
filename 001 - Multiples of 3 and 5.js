function multiplesOf3and5(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

module.exports = multiplesOf3and5;
