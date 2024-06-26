import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Box, Button, Text } from '@chakra-ui/react';

const HomeScreen: React.FC = () => {
  return (
    <Box>
      <Header title="Home" />
      <Box p={4}>
        <Link to="/clothing-list">
          <Button colorScheme="blue" mb={4}>
            Select Clothes
          </Button>
        </Link>
        <Link to="/saved-sets">
          <Button colorScheme="blue">View Saved Sets</Button>
        </Link>
      </Box>
      <Box p={4}>
        <Text fontSize="lg" mb={2}>
          Summary
        </Text>
        <Text>Available Shoes: 10</Text>
        <Text>Available Shirts: 15</Text>
        <Text>Available Pants: 8</Text>
      </Box>
    </Box>
  );
};

export default HomeScreen;
