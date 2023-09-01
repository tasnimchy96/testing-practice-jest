const reverseString = require('./reverseString');

test('reverses a string correctly', () => {
  expect(reverseString('hello')).toBe('olleh');
});
