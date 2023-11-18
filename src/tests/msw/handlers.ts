import { http, HttpResponse } from 'msw';

import { apiUrl } from '@/enviroments/api.config';

// EXAMPLE
const loginHandler = http.post(`${apiUrl}/auth/signin`, () => {
  return HttpResponse.json({
    accessToken: '123'
  });
});

export const handlers = [loginHandler];
