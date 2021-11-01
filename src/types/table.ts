export type Order = 'asc' | 'desc';

export interface IHeaderCell<T> {
  disableSort?: boolean;
  disablePadding: boolean;
  id: keyof T;
  label: string;
  numeric?: boolean;
}
