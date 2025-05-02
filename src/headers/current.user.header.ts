import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Role } from 'src/auth/mock/user';

export interface UserPayload {
  name: string;
  email: string;
  role: Role;
}

/**
 * Custom decorator to extract the user payload from the JWT token.
 *
 * This simplifies access to the currently authenticated user's data
 * in protected routes by reading the `user` object injected by Passport
 * (after token validation).
 *
 * Example usage in a controller:
 *
 *   @Get('profile')
 *   @UseGuards(JwtAuthGuards)
 *   getProfile(@CurrentUser() user: UserPayload) {
 *     return user;
 *   }
 */
export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext): UserPayload => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
