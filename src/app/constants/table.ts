import { IBreach } from '../../types/breaches';
import { IHeaderCell } from '../../types/table';

export const headerCells: IHeaderCell<IBreach>[] = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'domain',
    label: 'Domain',
  },
  {
    id: 'dataClasses',
    label: 'What was Breached?',

    disableSort: true,
  },
  {
    id: 'breachDate',
    label: 'Breach Date',
  },
  {
    id: 'modifiedDate',
    label: 'Last Updated',
  },
  {
    id: 'isVerified',
    label: 'Verified',
  },
];
