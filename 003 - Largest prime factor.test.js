const largestPrimeFactor = require('./003 - Largest prime factor');

describe('Largest prime factor', () => {
  test('largestPrimeFactor(2) should return NaN for negative numbers', () => {
    expect(largestPrimeFactor(-2)).toBeNaN();
  });

  test('largestPrimeFactor(2) should return 2', () => {
    expect(largestPrimeFactor(2)).toBe(2);
  });

  test('largestPrimeFactor(3) should return 3', () => {
    expect(largestPrimeFactor(3)).toBe(3);
  });

  test('largestPrimeFactor(5) should return 5', () => {
    expect(largestPrimeFactor(5)).toBe(5);
  });

  test('largestPrimeFactor(7) should return 7', () => {
    expect(largestPrimeFactor(7)).toBe(7);
  });

  test('largestPrimeFactor(13195) should return 13195', () => {
    expect(largestPrimeFactor(13195)).toBe(29);
  });

  test('largestPrimeFactor(600851475143) should return 600851475143', () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });
});
