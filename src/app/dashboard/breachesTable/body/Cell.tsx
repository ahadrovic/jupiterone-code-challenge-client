import React from 'react';
import { TableCell } from '@mui/material';

import { renderValue } from '../../../helpers/table';
import { CellProps } from '../../../../types/table';

const Cell = <T,>({ value }: CellProps<T>) => {
  return <TableCell>{renderValue(value)}</TableCell>;
};

export default Cell;
