const add = require('./add');

test('empty string returns 0', () => {
  expect(add("")).toBe(0);
});
