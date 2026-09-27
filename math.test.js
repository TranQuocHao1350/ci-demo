const { cong } = require('./math');

test('cong 2 so', () => {
  expect(cong(2, 3)).toBe(5);
});