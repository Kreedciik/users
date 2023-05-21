export interface IResponseData<T = any> {
  data: T;
  message: string;
  statusCode: number;
  show: boolean;
}
