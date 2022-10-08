const reverseStr = require('./reverseString');

test('Reversed Words', () => {
  expect(reverseStr('Big money, I like it')).toMatch('ti ekil I ,yenom giB');
});