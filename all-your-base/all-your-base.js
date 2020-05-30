//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (digits, sourceBase, targetBase) => {
  validation(digits, sourceBase, targetBase);

  if (digits[0] > 0) {
    const decimal = toDecimal(digits, sourceBase);
    return fromDecimal(decimal, targetBase);
  } else {
    return [0];
  }
};

const toDecimal = (digits, base) => {
  let result = 0;

  for (let index = 0; index < digits.length; index++) {
    const number = digits[digits.length - 1 - index];
    result += Math.pow(base, index) * number;
  }

  return result;
};

const fromDecimal = (decimal, base) => {
  let result = [];

  let quotient = decimal;
  while (quotient > 0) {
    const remainder = quotient % base;
    result.unshift(remainder);
    quotient = parseInt(quotient / base);
  }

  return result;
};

class Digits {
  static isEmpty = (digits) => digits.length === 0;
  static isInvalidRange = (digits, base) => {
    let negativeCount = 0;
    let outCount = 0;

    digits.forEach((digit) => {
      if (digit < 0) {
        negativeCount += 1;
      } else if (digit >= base) {
        outCount += 1;
      }
    });

    return negativeCount > 0 || outCount > 0;
  };
  static isInvalidLeading = (digits) => digits.length > 1 && digits[0] === 0;
  static isInvalid = (digits, base) =>
    this.isEmpty(digits) ||
    this.isInvalidRange(digits, base) ||
    this.isInvalidLeading(digits);
}

class Base {
  static isEmpty = (base) => base === undefined;
  static isInvalidRange = (base) => base <= 1;
  static isInvalidFormat = (base) => base !== parseInt(base);
  static isInvalid = (base) =>
    this.isEmpty(base) ||
    this.isInvalidRange(base) ||
    this.isInvalidFormat(base);
}

const validation = (digits, sourceBase, targetBase) => {
  if (Base.isInvalid(sourceBase)) {
    throw new Error('Wrong input base');
  } else if (Base.isInvalid(targetBase)) {
    throw new Error('Wrong output base');
  } else if (Digits.isInvalid(digits, sourceBase)) {
    throw new Error('Input has wrong format');
  }
};
