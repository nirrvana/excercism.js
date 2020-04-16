//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isValid(side1, side2, side3) {
    const max = Math.max(side1, side2, side3);
    const sum = side1 + side2 + side3;
    return side1 > 0 && side2 > 0 && side3 > 0 && sum - max > max;
  }

  isEqual(side1, side2) {
    return side1 === side2;
  }

  isEquilateral() {
    return (
      this.isValid(this.a, this.b, this.c) &&
      this.isEqual(this.a, this.b) &&
      this.isEqual(this.b, this.c) &&
      this.isEqual(this.c, this.a)
    );
  }

  isIsosceles() {
    return (
      this.isValid(this.a, this.b, this.c) &&
      (this.isEqual(this.a, this.b) ||
        this.isEqual(this.b, this.c) ||
        this.isEqual(this.c, this.a))
    );
  }

  isScalene() {
    return (
      this.isValid(this.a, this.b, this.c) &&
      !this.isEqual(this.a, this.b) &&
      !this.isEqual(this.a, this.b) &&
      !this.isEqual(this.c, this.a)
    );
  }
}
