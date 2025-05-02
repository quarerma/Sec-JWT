import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser, UserPayload } from 'src/headers/current.user.header';
import { JwtAuthGuards } from 'src/auth/auth/jwt.auth.guards';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('permission')
  @UseGuards(JwtAuthGuards)
  async getPermissions(@CurrentUser() user: UserPayload) {
    console.log(user);

    return this.userService.getUserPermissions(user);
  }
}
