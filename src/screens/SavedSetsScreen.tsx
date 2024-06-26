import { Box, Button, List, ListItem, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Header from '../components/Header';

const SavedSetsScreen: FC = () => {
  const savedSets = [
    // Example data, replace with actual data fetch
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
    <Box>
      <Header title="Saved Sets" showBackButton />
      <List spacing={3} p={4}>
        {savedSets.map((set) => (
          <ListItem
            key={set.id}
            borderBottom="1px solid"
            borderColor="gray.200"
            py={2}
          >
            <Text>Type: {set.type}</Text>
            <Text>Brand: {set.brand}</Text>
            <Text>Color: {set.color}</Text>
            <Text>Size: {set.size}</Text>
            <Text>Date: {set.date}</Text>
            <Button mt={2} colorScheme="red">
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SavedSetsScreen;
