import { FC } from 'react';
import { ClothingItemProps } from '../config';

const ClothingItem: FC<ClothingItemProps> = ({ item }) => {
  return (
    <li>
      <p>Type: {item.type}</p>
      <p>Brand: {item.brand}</p>
      <p>Color: {item.color}</p>
      <p>Size: {item.size}</p>
      <button>Select</button>
    </li>
  );
};

export default ClothingItem;
