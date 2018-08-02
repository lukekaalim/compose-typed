// @flow
/**
  Compose two functions together
*/
export const compose2 = <X, Y, Z>(
  func1: (i: X) => Y,
  func2: (i: Y) => Z,
): (i: X) => Z => (
    x => func2(func1(x))
  );

/**
  Compose three functions together
*/
export const compose3 = <X, Y, Z, V>(
  func1: (i: X) => Y,
  func2: (i: Y) => Z,
  func3: (i: Z) => V,
): (i: X) => V => (
    x => func3(func2(func1(x)))
  );

/**
  Compose four functions together
*/
export const compose4 = <X, Y, Z, V, M>(
  func1: (i: X) => Y,
  func2: (i: Y) => Z,
  func3: (i: Z) => V,
  func4: (i: V) => M,
): (i: X) => M => (
    x => func4(func3(func2(func1(x))))
  );
