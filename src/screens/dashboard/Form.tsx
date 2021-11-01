import React from 'react';
import {
  Box,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  Button,
  Typography,
} from '@mui/material';

import styles from './Form.module.css';

const Form = () => {
  return (
    <Box component="form" className={styles.formBox}>
      <Typography variant="h5" style={{ color: '#333333' }}>
        Enter an email address to get started
      </Typography>
      <br />
      <div className={styles.formBoxDiv}>
        <FormControl className={styles.formControl}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <Button variant="outlined">Submit</Button>
      </div>
    </Box>
  );
};

export default Form;
