//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const str = num.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Math.pow(Number(str[i]), str.length);
  }

  return num === sum;
};
