const { compose2, compose3, compose4 } = require('../dist/index.cjs.js');

describe('compose2', () => {
  test('compose2 will process', () => {
    const addTen = (x) => x + 10;
    const addFive = (x) => x + 5;

    const addFifteen = compose2(addFive, addTen);

    expect(addFifteen(5)).toEqual(20);
  });
});
