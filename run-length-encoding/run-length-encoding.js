//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (string) => {
  let count = 1;
  let preceding = '';
  let result = '';

  for (let current = 0; current <= string.length; current++) {
    if (preceding === string[current]) {
      count++;
    } else {
      result += `${count === 1 ? '' : count}${preceding}`;
      count = 1;
      preceding = string[current];
    }
  }
  return result;
};

export const decode = (string) => {
  let count = 0;
  let letter = '';
  let result = '';

  for (let current = 0; current < string.length; current++) {
    letter = string[current];
    if (Number(letter) > 0) {
      count += letter;
    } else {
      count = count === 0 ? 1 : Number(count);
      result += letter.repeat(count);
      count = 0;
    }
  }
  return result;
};
