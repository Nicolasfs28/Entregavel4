const contagem = require('../contagem')

test('Realizando o teste com numeros 8, 9.6 e 3', () => {
    expect(contagem([8, 9.6, 3])).toBe("Quantidade de numeros inteiros: 2");
  });

  test('Realizando o teste com numeros 1.5, 6.3, 5, 10 e 3', () => {
    expect(contagem([1.5, 6.3, 5, 10, 3])).toBe("Quantidade de numeros inteiros: 3");
  });