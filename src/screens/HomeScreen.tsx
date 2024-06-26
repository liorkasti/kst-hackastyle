import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Header title="Home" />
      <div>
        <Link to="/clothing-list">
          <button>Select Clothes</button>
        </Link>
        <Link to="/saved-sets">
          <button>View Saved Sets</button>
        </Link>
      </div>
      <div>
        <h2>Summary</h2>
        <p>Available Shoes: 10</p>
        <p>Available Shirts: 15</p>
        <p>Available Pants: 8</p>
      </div>
    </div>
  );
};

export default HomeScreen;
