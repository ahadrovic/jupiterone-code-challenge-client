import React from 'react';
import { TableCell, TableSortLabel } from '@mui/material';

import { IHeaderCell, Order } from '../../../../types/table';

interface IProps<T> extends IHeaderCell<T> {
  orderBy: keyof T;
  order: Order;
}
interface IHandlers<T> {
  onSortClick: (
    property: keyof T,
  ) => (event: React.MouseEvent<unknown>) => void;
}

type CellProps<T> = IProps<T> & IHandlers<T>;

const Cell = <T,>({
  id,
  label,
  order,
  orderBy,
  disableSort,
  onSortClick,
}: CellProps<T>) => {
  return (
    <TableCell
      align="left"
      key={id as string}
      sortDirection={orderBy === id ? order : false}
    >
      {disableSort && label}
      {!disableSort && (
        <TableSortLabel
          active={orderBy === id}
          direction={orderBy === id ? order : 'asc'}
          onClick={onSortClick(id)}
        >
          {label}
        </TableSortLabel>
      )}
    </TableCell>
  );
};

export default Cell;
