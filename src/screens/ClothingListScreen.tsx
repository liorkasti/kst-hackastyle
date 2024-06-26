import React from 'react';
import ClothingItem from '../components/ClothingItem';
import Header from '../components/Header';
import { useClothingItems } from '../hooks/useFetch';
import { ClothingItemProps, ClothingItemType } from '../config';
import { Box, List, ListItem, Spinner, Text } from '@chakra-ui/react';

const ClothingListScreen: React.FC = () => {
  const { data: clothingItems, isLoading, error } = useClothingItems();

  if (isLoading) return <Spinner />;
  if (error) return <Text>Error loading items</Text>;

  return (
    <Box>
      <Header title="Clothing List" showBackButton />
      <List spacing={3} p={4}>
        {clothingItems.map((item: ClothingItemType) => (
          <ListItem key={item.id}>
            <ClothingItem item={item} id={item.id} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ClothingListScreen;
