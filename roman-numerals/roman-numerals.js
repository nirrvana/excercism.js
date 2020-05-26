//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (number) => {
  let result = '';

  while (number > 0) {
    for (const ROMAN in ROMAN_NUMBER_TABLE) {
      if (ROMAN_NUMBER_TABLE[ROMAN] <= number) {
        result += ROMAN;
        number -= ROMAN_NUMBER_TABLE[ROMAN];
        break;
      }
    }
  }

  return result;
};
const ROMAN_NUMBER_TABLE = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
