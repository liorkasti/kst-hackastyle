import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useClothingItems } from '../hooks/useClothingItems';
import Header from '../components/Header';
import { ClothingItemType } from '../constants/types';
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useStyles } from '../constants/styles';
import { STRINGS } from '../constants/strings';
import { getNextType, getRecommendations } from '../hooks/useRecommende';

const ClothingListScreen: React.FC = () => {
  const { data: clothingItems, isLoading, error } = useClothingItems();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<ClothingItemType | null>(
    null
  );
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const type = new URLSearchParams(location.search).get('type') || '';

  const filteredItems = useMemo(() => {
    if (!clothingItems) return [];
    return selectedItem
      ? getRecommendations(selectedItem, clothingItems)
      : clothingItems.filter((item: ClothingItemType) => item.type === type);
  }, [clothingItems, selectedItem, type]);

  const handleSelectItem = (item: ClothingItemType) => {
    setSelectedItem(item);
    const recommendations = getRecommendations(item, clothingItems);
    if (recommendations.length > 0) {
      navigate(`/clothing-list?type=${getNextType(item.type)}`, {
        state: { recommendations },
      });
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/');
  };

  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Error loading items</Typography>;

  return (
    <Box className={classes.root}>
      <Header
        title={`${type.charAt(0).toUpperCase() + type.slice(1)} Clothing List`}
        showBackButton
      />
      <Box p={4}>
        <Grid container spacing={2} mb={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>{STRINGS.FILTER_BY_SIZE}</InputLabel>
              <Select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as string)}
                label={STRINGS.FILTER_BY_SIZE}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>{STRINGS.FILTER_BY_COLOR}</InputLabel>
              <Select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value as string)}
                label={STRINGS.FILTER_BY_COLOR}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Red">Red</MenuItem>
                <MenuItem value="Blue">Blue</MenuItem>
                <MenuItem value="Black">Black</MenuItem>
                <MenuItem value="Green">Green</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {filteredItems.map((item: ClothingItemType) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Paper className={classes.card} elevation={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={4}>
                    <img
                      className={classes.image}
                      src="https://via.placeholder.com/100"
                      alt={`${item.brand} ${item.type}`}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6">{item.brand}</Typography>
                    <Typography>{`${STRINGS.SIZE}: ${item.size}`}</Typography>
                    <Typography>{`${STRINGS.COLOR}: ${item.color}`}</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={() => handleSelectItem(item)}
                    >
                      {STRINGS.SELECT}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{STRINGS.SAVE_SET}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {`You have selected all items. Would you like to save this set?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              {STRINGS.SAVE_SET}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default ClothingListScreen;
