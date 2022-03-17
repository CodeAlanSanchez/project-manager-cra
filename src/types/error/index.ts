export default interface ErrorResult extends ErrorResponse {
  code: string;
}

export interface ErrorResponse {
  field: string;
  message: string;
}
