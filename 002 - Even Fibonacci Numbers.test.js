const fibonacciEvenSum = require('./002 - Even Fibonacci Numbers');

describe('Even Fibonacci Numbers', () => {
  test('fibonacciEvenSum should return an even number', () => {
    const random = Math.random() * 12354;
    const result = fibonacciEvenSum(random);

    expect(result % 2).toBe(0);
  });
  test('fibonacciEvenSum(10) should return 10', () => {
    expect(fibonacciEvenSum(10)).toBe(10);
  });

  test('fibonacciEvenSum(60) should return 44', () => {
    expect(fibonacciEvenSum(60)).toBe(44);
  });

  test('fibonacciEvenSum(1000) should return 798', () => {
    expect(fibonacciEvenSum(1000)).toBe(798);
  });

  test('fibonacciEvenSum(100000) should return 60696', () => {
    expect(fibonacciEvenSum(100000)).toBe(60696);
  });

  test('fibonacciEvenSum(4000000) should return 4613732', () => {
    expect(fibonacciEvenSum(4000000)).toBe(4613732);
  });
});
