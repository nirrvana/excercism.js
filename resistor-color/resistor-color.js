//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// sol.1
// export const colorCode = (color) => COLORS.indexOf(color.toLowerCase());

// sol.2
export const colorCode = (color) => {
  for (let index = 0; index < COLORS.length; index++) {
    if (COLORS[index] === color) {
      return index;
    }
  }
  return -1;
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
