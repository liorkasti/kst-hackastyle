export const sizeMapping = {
  shirts: {
    S: { pants: '30', shoes: '38' },
    M: { pants: '32', shoes: '40' },
    L: { pants: '34', shoes: '42' },
    XL: { pants: '36', shoes: '44' },
    XXL: { pants: '38', shoes: '46' },
  },
  pants: {
    '30': { shirts: 'S', shoes: '38' },
    '32': { shirts: 'M', shoes: '40' },
    '34': { shirts: 'L', shoes: '42' },
    '36': { shirts: 'XL', shoes: '44' },
    '38': { shirts: 'XXL', shoes: '46' },
  },
  shoes: {
    '38': { shirts: 'S', pants: '30' },
    '40': { shirts: 'M', pants: '32' },
    '42': { shirts: 'L', pants: '34' },
    '44': { shirts: 'XL', pants: '36' },
    '46': { shirts: 'XXL', pants: '38' },
  },
};

export const colorCombination = {
  Red: ['Black', 'White', 'Blue'],
  Blue: ['White', 'Gray', 'Red'],
  Black: ['White', 'Gray', 'Red'],
  White: ['Black', 'Blue', 'Red'],
  Green: ['Black', 'White'],
};
