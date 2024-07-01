export const API_URL =
  'https://f32cf30e-6939-45f6-b650-40d5b43dc7f1.mock.pstmn.io/clothes';

export const colorCombination: Record<string, string[]> = {
  Red: ['Black', 'White', 'Blue'],
  Blue: ['White', 'Gray', 'Red'],
  Black: ['White', 'Gray', 'Red'],
  White: ['Black', 'Blue', 'Red'],
  Green: ['Black', 'White'],
};

export const sizeMapping: Record<string, Record<string, string[]>> = {
  shirts: {
    S: ['30', '38'],
    M: ['32', '40'],
    L: ['34', '42'],
    XL: ['36', '44'],
    XXL: ['38', '46'],
  },
  pants: {
    '30': ['S', '38'],
    '32': ['M', '40'],
    '34': ['L', '42'],
    '36': ['XL', '44'],
    '38': ['XXL', '46'],
  },
  shoes: {
    '38': ['S', '30'],
    '40': ['M', '32'],
    '42': ['L', '34'],
    '44': ['XL', '36'],
    '46': ['XXL', '38'],
  },
};
