import React from 'react';
import Form from './dashboard/Form';

import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboardBox}>
      <Form />
      {/* TODO: Add table here */}
    </div>
  );
};

export default Dashboard;
