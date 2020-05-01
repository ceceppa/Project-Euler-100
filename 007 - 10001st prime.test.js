const nthPrime = require('./007 - 10001st prime');

describe('007 - 10001st prime', () => {
  it('nthPrime(6) should return a number', () => {
    const result = nthPrime(6);

    expect(typeof result).toBe('number');
  });

  it('nthPrime(6) should return a number', () => {
    const result = nthPrime(6);

    expect(result).toBe(13);
  });

  it('nthPrime(10) should return a number', () => {
    const result = nthPrime(10);

    expect(result).toBe(29);
  });

  it('nthPrime(100) should return a number', () => {
    const result = nthPrime(100);

    expect(result).toBe(541);
  });

  it('nthPrime(1000) should return a number', () => {
    const result = nthPrime(1000);

    expect(result).toBe(7919);
  });

  it('nthPrime(10001) should return a number', () => {
    const result = nthPrime(10001);

    expect(result).toBe(104743);
  });
});
