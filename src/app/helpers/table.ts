import { Order } from '../../types/table';

export const allBrowserSort = <T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) => {
  const stabilizedSorted = array
    .map((item, index) => [item, index] as [T, number])
    .sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
  return stabilizedSorted.map((el) => el[0]);
};

export const descComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const getComparator = <T>(
  order: Order,
  orderBy: keyof T,
): ((a: T, b: T) => number) => {
  return order === 'desc'
    ? (a, b) => descComparator<T>(a, b, orderBy)
    : (a, b) => -descComparator<T>(a, b, orderBy);
};
