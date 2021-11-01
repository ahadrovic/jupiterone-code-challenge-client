import React from 'react';
import {
  Box,
  Input,
  InputLabel,
  FormControl,
  Button,
  Typography,
  FormHelperText,
} from '@mui/material';

import { SubmitHandler, useForm } from 'react-hook-form';

import { FormInputs } from '../../types/form';

import styles from './Form.module.css';

type FormProps = {
  onSubmit: (data: FormInputs) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm: SubmitHandler<FormInputs> = (data) => onSubmit(data);

  return (
    <Box
      component="form"
      className={styles.formBox}
      onSubmit={handleSubmit(submitForm)}
    >
      <Typography variant="h5" style={{ color: '#333333' }}>
        Enter an email address to get started
      </Typography>
      <br />
      <div className={styles.formBoxDiv}>
        <FormControl className={styles.formControl}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            error={!!errors.email}
            id="email"
            aria-describedby="helper-text"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <FormHelperText id="helper-text" error={true}>
              This field is required
            </FormHelperText>
          )}
        </FormControl>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </div>
    </Box>
  );
};

export default Form;
