import { IBreach } from '../../types/breaches';
import { IHeaderCell } from '../../types/table';

export const headerCells: IHeaderCell<IBreach>[] = [
  {
    id: 'name',
    label: 'Name',
    numeric: false,
    disablePadding: true,
  },
  {
    id: 'domain',
    label: 'Domain',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'dataClasses',
    label: 'What was Breached?',
    numeric: false,
    disableSort: true,
    disablePadding: false,
  },
  {
    id: 'breachDate',
    label: 'Breach Date',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'modifiedDate',
    label: 'Last Modified',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'isVerified',
    label: 'Verified',
    numeric: false,
    disablePadding: false,
  },
];
