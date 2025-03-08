const add = require('./add');

test('empty string returns 0', () => {
  expect(add("")).toBe(0);
});


test('single number returns itself', () => {
    expect(add("5")).toBe(5);
  });
  

test('two comma-separated numbers return sum', () => {
    expect(add("1,5")).toBe(6);
  });

  test('any amount of numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

test('handle newline delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  
  