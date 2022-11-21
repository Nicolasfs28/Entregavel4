const ordenacao = require('../Ordenacao');


test('Realizando o teste com os numeros 20, 40, 1, 3, 5, 10', () => {
    expect(ordenacao([20, 40, 1, 3, 5, 10])).toStrictEqual([1, 3, 5, 10, 20, 40]);
  });

  test('Realizando o teste com os numeros 100, 70, 50, 40, 2, 8, 90.', () => {
    expect(ordenacao([100, 70, 50, 40, 2, 8, 90])).toStrictEqual([2, 8, 40, 50, 70, 90, 100]);
  });