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
