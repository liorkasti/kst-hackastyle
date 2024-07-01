import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Typography, CircularProgress, Grid } from '@mui/material';
import Header from '../components/Header';
import { useClothingItems } from '../hooks/useClothingItems';

const HomeScreen: React.FC = () => {
  const { data: clothingItems, isLoading, error } = useClothingItems();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading items</Typography>;

  const shoesCount = clothingItems.filter(
    (item: { type: string }) => item.type === 'shoes'
  ).length;
  const shirtsCount = clothingItems.filter(
    (item: { type: string }) => item.type === 'shirt'
  ).length;
  const pantsCount = clothingItems.filter(
    (item: { type: string }) => item.type === 'pants'
  ).length;

  return (
    <Box>
      <Header title="Home" />
      <Box p={4}>
        <Typography variant="h5" mb={4}>
          Summary
        </Typography>
        <Grid container spacing={2} mb={4}>
          <Grid item>
            <Typography>
              Available Shoes:{' '}
              {isLoading ? <CircularProgress size={16} /> : shoesCount}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Available Shirts: {shirtsCount}</Typography>
          </Grid>
          <Grid item>
            <Typography>Available Pants: {pantsCount}</Typography>
          </Grid>
        </Grid>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSelectedItem('shoes')}
              disabled={selectedItem === 'shoes'}
            >
              {selectedItem === 'shoes' ? 'Shoes Selected' : 'Select Shoes'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSelectedItem('shirt')}
              disabled={selectedItem === 'shirt'}
            >
              {selectedItem === 'shirt' ? 'Shirt Selected' : 'Select Shirt'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSelectedItem('pants')}
              disabled={selectedItem === 'pants'}
            >
              {selectedItem === 'pants' ? 'Pants Selected' : 'Select Pants'}
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={2}
          mt={4}
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/clothing-list?type=shoes')}
            >
              Select Shoes
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/clothing-list?type=shirts')}
            >
              Select Shirts
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/clothing-list?type=pants')}
            >
              Select Pants
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box p={4}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Link to="/clothing-list">
              <Button variant="contained" color="primary">
                Select Clothes
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/saved-sets">
              <Button variant="contained" color="primary">
                View Saved Sets
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeScreen;
