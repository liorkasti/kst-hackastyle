import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from '../config';

const fetchClothingItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const useClothingItems = () => {
  return useQuery('clothingItems', fetchClothingItems, {
    // Configuring stale time to 5 minutes
    staleTime: 5 * 60 * 1000,
    // Retry up to 3 times on failure
    retry: 3,
    // Handle error
    onError: (error) => {
      console.error('Error fetching clothing items:', error);
    },
  });
};
