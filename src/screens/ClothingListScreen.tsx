import React from 'react';
import ClothingItem from '../components/ClothingItem';
import Header from '../components/Header';
import { useClothingItems } from '../hooks/useFetch';
import { ClothingItemProps } from '../config';

const ClothingListScreen: React.FC = () => {
  const { data: clothingItems, isLoading, error } = useClothingItems();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading items</div>;

  return (
    <div>
      <Header title="Clothing List" showBackButton />
      <ul>
        {clothingItems.map((item: ClothingItemProps) => (
          <ClothingItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ClothingListScreen;
