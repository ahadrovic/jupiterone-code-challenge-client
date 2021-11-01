import React, { useState } from 'react';
import { Paper, Alert } from '@mui/material';

import Form from './dashboard/Form';
import BreachesTable from './dashboard/BreachesTable';

import { mockBreaches } from './constants/mockData';

import { IBreach } from '../types/breaches';

import styles from './Dashboard.module.css';

const Dashboard = () => {
  // TODO: connect API
  const [breaches, setBreaches] = useState<IBreach[] | undefined>();
  return (
    <Paper elevation={1} className={styles.dashboardBox}>
      <Form
        onSubmit={({ email }) => {
          console.log('email:', email);
          setBreaches(mockBreaches);
        }}
      />
      {!!breaches && <br />}
      {breaches?.length === 0 && (
        <Alert severity="success">No breaches were found.</Alert>
      )}
      {!!breaches?.length && <BreachesTable breaches={breaches} />}
    </Paper>
  );
};

export default Dashboard;
