import React from 'react';
import Header from '../components/Header';

const SavedSetsScreen: React.FC = () => {
  const savedSets = [
    {
      id: 1,
      type: 'Shirt',
      brand: 'Brand A',
      color: 'Red',
      size: 'M',
      date: '2023-06-24',
    },
  ];

  return (
    <div>
      <Header title="Saved Sets" showBackButton />
      <ul>
        {savedSets.map((set) => (
          <li key={set.id}>
            <p>Type: {set.type}</p>
            <p>Brand: {set.brand}</p>
            <p>Color: {set.color}</p>
            <p>Size: {set.size}</p>
            <p>Date: {set.date}</p>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedSetsScreen;
