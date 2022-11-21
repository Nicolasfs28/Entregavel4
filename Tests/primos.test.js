const primos = require('../primos');


test('Realizando o teste com o numero 6', () => {
    expect(primos(6)).toBe("O número digitado não é primo!");
  });

  test('Realizando o teste com o numero 2', () => {
    expect(primos(2)).toBe("O número digitado é primo!");
  });