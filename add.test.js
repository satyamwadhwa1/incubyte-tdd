const add = require('./add');

test('empty string returns 0', () => {
  expect(add("")).toBe(0);
});


test('single number returns itself', () => {
    expect(add("5")).toBe(5);
  });
  