import React, { useState, useCallback, useMemo } from 'react';
import { Alert, AlertTitle, Box, Table, TableContainer } from '@mui/material';

import TableHeader from './breachesTable/Header';
import TableBody from './breachesTable/Body';

import { headerCells } from '../constants/table';

import { Order } from '../../types/table';
import { IBreach } from '../../types/breaches';

type BreachesTableProps = {
  breaches: IBreach[];
};

const BreachesTable = ({ breaches }: BreachesTableProps) => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof IBreach>('name');

  const handleOnSort = useCallback(
    (event: React.MouseEvent<unknown>, property: keyof IBreach) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    },
    [orderBy, order, setOrder, setOrderBy],
  );

  const titleText = useMemo(() => {
    const count = breaches.length;
    return `${count} ${count > 1 ? 'breaches were' : 'breach was'} found.`;
  }, [breaches]);

  return (
    <Box>
      <Alert severity="warning">{titleText}</Alert>
      <br />
      <TableContainer>
        <Table size="small" sx={{ minWidth: 800 }} aria-labelledby="tableTitle">
          <TableHeader<IBreach>
            order={order}
            orderBy={orderBy}
            headerCells={headerCells}
            onSort={handleOnSort}
          />
          <TableBody<IBreach>
            order={order}
            orderBy={orderBy}
            items={breaches}
            headerCells={headerCells}
          />
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BreachesTable;
