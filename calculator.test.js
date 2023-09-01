const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add method', () => {
    test('adds two positive numbers correctly', () => {
      expect(calculator.add(3, 5)).toBe(8);
    });

    test('adds a positive and a negative number correctly', () => {
      expect(calculator.add(10, -3)).toBe(7);
    });

    test('adds two negative numbers correctly', () => {
      expect(calculator.add(-7, -4)).toBe(-11);
    });
  });

  describe('subtract method', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(calculator.subtract(10, 3)).toBe(7);
    });

    test('subtracts a positive and a negative number correctly', () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });

    test('subtracts two negative numbers correctly', () => {
      expect(calculator.subtract(-8, -3)).toBe(-5);
    });
  });

  describe('divide method', () => {
    test('divides two positive numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply method', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('multiplies a positive and a negative number correctly', () => {
      expect(calculator.multiply(-2, 5)).toBe(-10);
    });

    test('multiplies two negative numbers correctly', () => {
      expect(calculator.multiply(-3, -2)).toBe(6);
    });
  });
});
