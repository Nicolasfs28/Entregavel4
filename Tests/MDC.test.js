const mdc = require('../MDC');


test('Realizando o teste com os numeros 10 e 5', () => {
    expect(mdc(10,5)).toBe("MDC é: 5");
  });

  test('Realizando o teste com os numeros 30 e 10', () => {
    expect(mdc(30,10)).toBe("MDC é: 10");
  });