const sumSquareDifference = require('./006 - Sum square difference');

describe('#006 - Sum square difference', () => {
  test('sumSquareDifference(10) should return a number', () => {
    const result = sumSquareDifference(10);

    expect(typeof result).toBe('number');
  });

  test('sumSquareDifference(10) should return 2640', () => {
    const result = sumSquareDifference(10);

    expect(result).toBe(2640);
  });

  test('sumSquareDifference(20) should return 41230', () => {
    const result = sumSquareDifference(20);

    expect(result).toBe(41230);
  });

  test('sumSquareDifference(100) should return 25164150', () => {
    const result = sumSquareDifference(100);

    expect(result).toBe(25164150);
  });
});
