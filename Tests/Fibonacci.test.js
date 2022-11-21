const fibonacci = require('../Fibonacci');

test('Realizando o teste com numero 8', () => {
    expect(fibonacci(8)).toBe("0, 1, 1, 2, 3, 5, 8, 13.");
});

test('Realizando o teste com numero 7', () => {
  expect(fibonacci(7)).toBe("0, 1, 1, 2, 3, 5, 8.");
});