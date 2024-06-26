export const API_URL =
  'https://f32cf30e-6939-45f6-b650-40d5b43dc7f1.mock.pstmn.io/clothes';

export type ClothingItemType = {
  id: React.Key;
  type: string;
  brand: string;
  color: string;
  size: string;
};

export type ClothingItemProps = {
  id: React.Key | null | undefined;
  item: ClothingItemType;
};
