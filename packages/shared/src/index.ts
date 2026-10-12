export interface HelloResponse {
  message: string;
}

export interface ApiResult<T> {
  success: boolean;
  data: T;
}

export const API_ROUTES = {
  hello: '/hello',
} as const;
