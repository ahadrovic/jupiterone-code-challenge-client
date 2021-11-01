export type Order = 'asc' | 'desc';

export interface IHeaderCell<T> {
  id: keyof T;
  label: string;
  disableSort?: boolean;
}

export type CellProps<T> = { value: T[keyof T] };
