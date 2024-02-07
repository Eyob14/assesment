export interface GetApiResponse<T> {
  success: boolean;
  message: string;
  value: T[];
  errors: string[];
}

export interface GetDetailsApiResponse<T> {
  success: boolean;
  message: string;
  value: T;
  errors: string[];
}
