import React, { useCallback, useState } from 'react';
import { Paper, Alert, AlertTitle } from '@mui/material';

import Form from './dashboard/Form';
import BreachesTable from './dashboard/BreachesTable';

import { IBreach } from '../types/breaches';
import { Error as APIError } from '../types/services';

import styles from './Dashboard.module.css';
import { getBreaches } from './services/breaches';
import ErrorAlert from './dashboard/ErrorAlert';

const Dashboard = () => {
  const [apiError, setAPIError] = useState<APIError | null>(null);
  const [breaches, setBreaches] = useState<IBreach[] | undefined>();
  const fetchBreaches = useCallback(
    async (account: string) => {
      setAPIError(null);
      const { result, error } = await getBreaches(account);
      if (error || !result) {
        setAPIError(error || { message: 'Something went wrong.' });
        return;
      }
      setBreaches(result.data);
    },
    [setAPIError],
  );

  return (
    <Paper elevation={1} className={styles.dashboardBox}>
      <Form
        onSubmit={({ email }) => {
          fetchBreaches(email);
        }}
      />
      {(!!breaches || !!apiError) && <br />}
      {apiError && <ErrorAlert error={apiError} />}
      {breaches?.length === 0 && (
        <Alert severity="success">No breaches were found.</Alert>
      )}
      {!!breaches?.length && <BreachesTable breaches={breaches} />}
    </Paper>
  );
};

export default Dashboard;
