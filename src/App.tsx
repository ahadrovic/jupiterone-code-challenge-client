import React from 'react';

import { Container } from '@mui/material';
import Header from './screens/Header';
import Dashboard from './screens/Dashboard';

import styles from './App.module.css';

const App = () => {
  return (
    <Container className={styles.appContainer}>
      <Header />
      <Dashboard />
    </Container>
  );
};

export default App;
