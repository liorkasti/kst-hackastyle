import { ClothingItemType } from '../constants/config';
import { sizeMapping, colorCombination } from '../constants/recommendations';
// קבלת מידות מומלצות לפי סוגים שונים
export function getRecommendedSizes(type: string, size: string): string[] {
  const sizeTypeMapping = sizeMapping[type];
  if (!sizeTypeMapping || !sizeTypeMapping[size]) return [];
  return Object.values(sizeTypeMapping[size]);
}
// קבלת צבעים מומלצים
export function getRecommendedColors(color: string): string[] {
  return colorCombination[color] || [];
}
// פילטרציה של פריטי הלבוש לפי המידות והצבעים המומלצים
export function getRecommendations(
  selectedItem: ClothingItemType,
  clothingItems: ClothingItemType[]
): ClothingItemType[] {
  const { type, size, color } = selectedItem;

  const recommendedSizes = getRecommendedSizes(type, size);
  const recommendedColors = getRecommendedColors(color);

  return clothingItems.filter(
    (item) =>
      recommendedSizes.includes(item.size) &&
      recommendedColors.includes(item.color)
  );
}

export const getNextType = (currentType: string): string => {
  const types = ['shoes', 'shirts', 'pants'];
  const currentIndex = types.indexOf(currentType);
  return currentIndex >= 0 && currentIndex < types.length - 1
    ? types[currentIndex + 1]
    : types[0];
};
