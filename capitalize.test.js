const capitalize = require('./capitalize');

test('capitalizes the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
