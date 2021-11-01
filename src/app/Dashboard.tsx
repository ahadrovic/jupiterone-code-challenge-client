import React, { useState } from 'react';
import Paper from '@mui/material/Paper';

import Form from './dashboard/Form';
import BreachesTable from './dashboard/BreachesTable';

import styles from './Dashboard.module.css';
import { IBreach } from '../types/breaches';
import { mockBreaches } from './constants/mockData';

const Dashboard = () => {
  // TODO: connect API
  const [breaches, setBreaches] = useState<IBreach[] | undefined>();
  return (
    <Paper elevation={1} className={styles.dashboardBox}>
      <Form
        onSubmit={() => {
          setBreaches(mockBreaches);
        }}
      />
      {breaches?.length && <BreachesTable breaches={breaches} />}
    </Paper>
  );
};

export default Dashboard;
