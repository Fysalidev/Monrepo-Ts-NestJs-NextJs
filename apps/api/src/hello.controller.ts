import { Controller, Get } from '@nestjs/common';
import { API_ROUTES, HelloResponse, type ApiResult } from '@monorepo/shared';

@Controller()
export class HelloController {
  @Get(API_ROUTES.hello)
  getHello(): ApiResult<HelloResponse> {
    return { success: true, data: { message: 'Hello from NestJS!' } };
  }
}
