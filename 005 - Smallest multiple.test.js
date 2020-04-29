const smallestMultiple = require('./005 - Smallest multiple');

describe('#005 - Smallest multiple', () => {
  test('smallestMultiple(2) should return a number', () => {
    const result = smallestMultiple(2);

    expect(typeof result).toBe('number');
  });

  test('smallestMultiple(5) should return 60', () => {
    const result = smallestMultiple(5);

    expect(result).toBe(60);
  });

  test('smallestMultiple(7) should return 420', () => {
    const result = smallestMultiple(7);

    expect(result).toBe(420);
  });

  test('smallestMultiple(10) should return 2520', () => {
    const result = smallestMultiple(10);

    expect(result).toBe(2520);
  });

  test('smallestMultiple(13) should return 360360', () => {
    const result = smallestMultiple(13);

    expect(result).toBe(360360);
  });

  test('smallestMultiple(20) should return 232792560', () => {
    const result = smallestMultiple(20);

    expect(result).toBe(232792560);
  });
});
