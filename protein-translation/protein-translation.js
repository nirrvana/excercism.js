//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (codons) => {
  const proteins = [];

  if (typeof codons === 'string') {
    for (let index = 0; index < codons.length; index += 3) {
      const codon = codons.slice(index, index + 3);
      const protein = CODON_PROTEIN_SET[codon];

      if (protein === 'STOP') {
        break;
      } else if (typeof protein === 'string') {
        proteins.push(protein);
      } else {
        throw new Error('Invalid codon');
      }
    }
  }

  return proteins;
};

const CODON_PROTEIN_SET = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP',
};
