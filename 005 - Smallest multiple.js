function smallestMultiple(number) {
  if (number <= 0) {
    throw new Error('Number cannot be <= 0');
  } else if (number == 1) {
    return 1;
  }

  let multiple = 1;
  for (let i = 2; i <= number; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}

// Euclid algorithm for Greater Common Divisor
function gcd(a, b) {
  return b > 0 ? gcd(b, a % b) : a;
}

// Least Common Multiple function
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

module.exports = smallestMultiple;
