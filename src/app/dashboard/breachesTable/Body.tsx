import React, { useMemo } from 'react';
import { TableRow, TableBody, TableCell } from '@mui/material';

import { allBrowserSort, getComparator } from '../../helpers/table';

import { IHeaderCell, Order } from '../../../types/table';
import BodyCell from './body/Cell';

type BodyProps<T> = {
  items: T[];
  order: Order;
  orderBy: keyof T;
  headerCells: IHeaderCell<T>[];
};

const Body = <T,>({ headerCells, items, order, orderBy }: BodyProps<T>) => {
  const sortedItems = useMemo(
    () => allBrowserSort(items, getComparator(order, orderBy)),
    [items, order, orderBy],
  );
  return (
    <TableBody>
      {sortedItems.map((row, index) => (
        <TableRow hover tabIndex={-1} key={`breach-row-${index}`}>
          {headerCells.map((cell) => (
            <BodyCell key={`cell-${cell.id}-${index}`} value={row[cell.id]} />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
