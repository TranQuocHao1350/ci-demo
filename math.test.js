const { cong, tru } = require('./math');

test('cong 2 so', () => {
  expect(cong(2, 3)).toBe(5);
});

test('tru 2 so', () => {
  expect(tru(5, 3)).toBe(2);
});