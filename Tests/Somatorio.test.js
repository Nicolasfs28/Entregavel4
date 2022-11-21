const somatorio = require('../Somatorio');


test('Realizando o teste com os numeros 20,30', () => {
    expect(somatorio([20,30])).toBe("Somatório: 50");
  });

  test('Realizando o teste com os numeros 2, 8', () => {
    expect(somatorio([2, 8])).toBe("Somatório: 10");
  });