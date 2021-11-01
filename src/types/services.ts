export type Error = {
  message?: string;
  statusCode?: number;
};
export type Result<T> = {
  data: T[];
};

export interface IAPIResonse<T> {
  result: Result<T> | null;
  error: Error | null;
}
