import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

import { Error as APIError } from '../../types/services';

type ErrorAlertProps = {
  error: APIError;
};

export const ErrorAlert = ({ error }: ErrorAlertProps) => {
  return (
    <Alert severity="error">
      <AlertTitle>
        Error from server{' '}
        {error.statusCode && <span>(Code {error.statusCode})</span>}
      </AlertTitle>
      {error.message && error.message}
    </Alert>
  );
};

export default ErrorAlert;
