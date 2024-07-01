import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useStyles } from '../constants/styles';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <div className={classes.header}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          {showBackButton && (
            <Button color="inherit" onClick={() => navigate(-1)}>
              Back
            </Button>
          )}
          <Typography variant="h6" className={classes.header}>
            HackaStyle
          </Typography>
          <Typography variant="h6" className={classes.header}>
            {title}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => navigate('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={() => navigate('/clothing-list?type=shoes')}
          >
            <ListItemText primary="Shoes" />
          </ListItem>
          <ListItem
            button
            onClick={() => navigate('/clothing-list?type=shirts')}
          >
            <ListItemText primary="Shirts" />
          </ListItem>
          <ListItem
            button
            onClick={() => navigate('/clothing-list?type=pants')}
          >
            <ListItemText primary="Pants" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => navigate('/saved-sets')}>
            <ListItemText primary="Saved Sets" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
