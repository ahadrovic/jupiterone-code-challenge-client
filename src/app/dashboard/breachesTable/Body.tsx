import React, { useMemo } from 'react';
import { TableRow, TableBody, TableCell } from '@mui/material';

import { allBrowserSort, getComparator } from '../../helpers/table';

import { IHeaderCell, Order } from '../../../types/table';

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
          {headerCells.map((cell) => {
            const value = row[cell.id];
            return (
              <TableCell>
                {Array.isArray(value) ? value.join(', ') : value}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
