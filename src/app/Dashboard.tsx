import React, { useCallback, useState } from 'react';
import { Paper, Alert, Typography } from '@mui/material';

import Form from './dashboard/Form';
import BreachesTable from './dashboard/BreachesTable';
import ErrorAlert from './dashboard/ErrorAlert';

import { getBreaches } from './services/breaches';

import { IBreach } from '../types/breaches';
import { Error as APIError } from '../types/services';

import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState<APIError | null>(null);
  const [breaches, setBreaches] = useState<IBreach[] | undefined>();

  const fetchBreaches = useCallback(
    async (account: string) => {
      setLoading(true);
      setAPIError(null);
      setBreaches([]);
      const { result, error } = await getBreaches(account);
      if (error || !result) {
        setLoading(false);
        setAPIError(error || { message: 'Something went wrong.' });
        return;
      }
      setLoading(false);
      setBreaches(result.data);
    },
    [setAPIError, setLoading],
  );

  const showEmpty = breaches?.length === 0 && !loading && !apiError;

  return (
    <Paper elevation={1} className={styles.dashboardBox}>
      <Form
        disabled={loading}
        onSubmit={({ email }) => {
          fetchBreaches(email);
        }}
      />
      {(!!breaches || !!apiError) && <br />}
      {loading && <Typography variant="h6">Loading...</Typography>}
      {apiError && <ErrorAlert error={apiError} />}
      {showEmpty && <Alert severity="success">No breaches were found.</Alert>}
      {!!breaches?.length && <BreachesTable breaches={breaches} />}
    </Paper>
  );
};

export default Dashboard;
