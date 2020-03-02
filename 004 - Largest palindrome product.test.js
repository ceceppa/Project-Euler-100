const largestPalindromeProduct = require('./004 - Largest palindrome product');

describe('#004 - Largest palindrome product', () => {
  test('largestPalindromeProduct(2) should return a number', () => {
    const result = largestPalindromeProduct(2);

    expect(typeof result).toBe('number');
  });

  test('largestPalindromeProduct(2) should return 9009', () => {
    const result = largestPalindromeProduct(2);

    expect(result).toBe(9009);
  });

  test('largestPalindromeProduct(3) should return 906609', () => {
    const result = largestPalindromeProduct(3);

    expect(result).toBe(906609);
  });
});
