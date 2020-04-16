//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num, count = 0) => {
  if (num <= 0) {
    throw new Error('Only positive numbers are allowed');
  } else if (num === 1) {
    return count;
  } else if (num % 2 === 0) {
    return steps(num / 2, ++count);
  } else {
    return steps(num * 3 + 1, ++count);
  }
};
