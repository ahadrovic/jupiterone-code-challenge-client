import React from 'react';
import { Box, TableHead, TableRow } from '@mui/material';
import { IHeaderCell, Order } from '../../../types/table';

import HeaderCell from './header/Cell';

interface IProps<T> {
  order: Order;
  orderBy: keyof T;
  headerCells: IHeaderCell<T>[];
}
interface IHandlers<T> {
  onSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
}

export type TableHeadProps<T> = IProps<T> & IHandlers<T>;

const Header = <T,>({
  order,
  orderBy,
  headerCells,
  onSort,
}: TableHeadProps<T>) => {
  const onSortClick =
    (property: keyof T) => (event: React.MouseEvent<unknown>) => {
      onSort(event, property);
    };
  return (
    <TableHead>
      <TableRow>
        {headerCells.map((cell, index) => (
          <HeaderCell
            key={`header-cell-${index}`}
            {...cell}
            order={order}
            orderBy={orderBy}
            onSortClick={onSortClick}
          />
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Header;
