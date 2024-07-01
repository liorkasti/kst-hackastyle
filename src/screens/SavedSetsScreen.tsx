import React from 'react';
import {
  Box,
  Button,
  List,
  ListItem,
  Typography,
  Divider,
  Container,
} from '@mui/material';
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
    <Container>
      <Header title="Saved Sets" showBackButton />
      <Box mt={4}>
        <List>
          {savedSets.map((set) => (
            <div key={set.id}>
              <ListItem>
                <Box>
                  <Typography variant="body1">Type: {set.type}</Typography>
                  <Typography variant="body1">Brand: {set.brand}</Typography>
                  <Typography variant="body1">Color: {set.color}</Typography>
                  <Typography variant="body1">Size: {set.size}</Typography>
                  <Typography variant="body1">Date: {set.date}</Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginTop: 8 }}
                  >
                    Delete
                  </Button>
                </Box>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default SavedSetsScreen;
