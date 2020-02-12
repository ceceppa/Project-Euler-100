const multiplesOf3and5 = require('./001 - Multiples of 3 and 5');

describe('Multiples of 3 and 5', () => {
  it('multiplesOf3and5(1000) should return 233168', () => {
    expect(multiplesOf3and5(1000)).toBe(233168);
  });

  it('multiplesOf3and5(49) should return 543', () => {
    expect(multiplesOf3and5(49)).toBe(543);
  });

  it('multiplesOf3and5(19564) should return 89301183', () => {
    expect(multiplesOf3and5(19564)).toBe(89301183);
  });

  it('multiplesOf3and5(8456) should return 16687353', () => {
    expect(multiplesOf3and5(8456)).toBe(16687353);
  });
});
