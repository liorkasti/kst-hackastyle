import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      {showBackButton && (
        <button style={styles.button} onClick={() => navigate(-1)}>
          Back
        </button>
      )}
      <h1>HackaStyle</h1>
      <h2 style={styles.title}>{title}</h2>
      <button style={styles.button} onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li>
              <button style={styles.navButton} onClick={() => navigate('/')}>
                Home
              </button>
            </li>
            <li>
              <button
                style={styles.navButton}
                onClick={() => navigate('/clothing-list')}
              >
                Clothing List
              </button>
            </li>
            <li>
              <button
                style={styles.navButton}
                onClick={() => navigate('/saved-sets')}
              >
                Saved Sets
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderBottom: '1px solid #dee2e6',
    position: 'relative',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  button: {
    fontSize: '1rem',
    padding: '0.5rem',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  },
  nav: {
    position: 'absolute',
    top: '3rem',
    right: '1rem',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.25rem',
    zIndex: 1000,
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navButton: {
    display: 'block',
    width: '100%',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderBottom: '1px solid #dee2e6',
    cursor: 'pointer',
    textAlign: 'left',
  },
};

export default Header;
