//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if (score < 3) {
    throw new Error('Ability scores must be at least 3');
  } else if (score > 18) {
    throw new Error('Ability scores can be at most 18');
  } else {
    return Math.floor((score - 10) / 2);
  }
};

export class Character {
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = 10 + abilityModifier(this.constitution);
  }

  static getScore() {
    return Math.floor(Math.random() * 6) + 1;
  }

  static rollAbility() {
    const scores = [
      Character.getScore(),
      Character.getScore(),
      Character.getScore(),
      Character.getScore(),
    ];
    const sum = scores.reduce((prev, curr) => (prev += curr), 0);
    const min = Math.min(...scores);
    return sum - min;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}
