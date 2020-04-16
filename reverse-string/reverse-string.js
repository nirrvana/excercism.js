//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  let result = '';

  for (let index = string.length - 1; index >= 0; index--) {
    result += string[index];
  }

  return result;
};
