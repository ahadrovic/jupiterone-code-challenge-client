import React from 'react';
import { Box, Typography } from '@mui/material';

import PwnedLogo from './header/PwnedLogo';
import logo from '../logo.png';

import styles from './Header.module.css';

const Header = () => {
  return (
    <Box className={styles.headerBox}>
      <img src={logo} />
      <Typography variant="h3"> x </Typography>
      <PwnedLogo />
    </Box>
  );
};

export default Header;
