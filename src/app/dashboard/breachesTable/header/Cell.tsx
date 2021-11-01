import { TableCell, TableSortLabel } from '@mui/material';
import React from 'react';
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

export type CellProps<T> = IProps<T> & IHandlers<T>;

const Cell = <T,>({
  id,
  label,
  order,
  orderBy,
  disableSort,
  disablePadding,
  onSortClick,
}: CellProps<T>) => {
  return (
    <TableCell
      align="left"
      key={id as string}
      padding={disablePadding ? 'none' : 'normal'}
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
