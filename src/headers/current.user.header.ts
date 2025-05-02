import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Role } from 'src/auth/mock/user';

export interface UserPayload {
  name: string;
  email: string;
  role: Role;
}
export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user as UserPayload;
});
