import { API_ROUTES, type ApiResult, type HelloResponse } from '@monorepo/shared';

export const API_BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3001';

export async function fetchHello(): Promise<HelloResponse | null> {
  try {
    const res = await fetch(`${API_BASE_URL}${API_ROUTES.hello}`, {
      cache: 'no-store',
    });
    const json: ApiResult<HelloResponse> = await res.json();
    return json.data;
  } catch {
    return null;
  }
}
