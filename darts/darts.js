//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const INNER = 1;
const MIDDLE = 5;
const OUTER = 10;

export const score = (x, y) => {
  const length = Math.sqrt(x * x + y * y);

  if (length <= INNER) {
    return 10;
  } else if (length <= MIDDLE) {
    return 5;
  } else if (length <= OUTER) {
    return 1;
  } else {
    return 0;
  }
};
