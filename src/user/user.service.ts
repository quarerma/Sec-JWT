import { BadRequestException, Injectable } from '@nestjs/common';
import { Role } from 'src/auth/mock/user';
import { UserPayload } from 'src/headers/current.user.header';

@Injectable()
export class UserService {
  async getUserPermissions(user: UserPayload) {
    switch (user.role) {
      case Role.Reader:
        return 'You can read all posts but cannot write any.';
      case Role.Writer:
        return 'You can read all posts, write your own posts, and edit them, but cannot edit posts written by others.';
      case Role.SuperAdmin:
        return 'You can read, write, edit, and delete any post from any user.';
      default:
        throw new BadRequestException();
    }
  }
}
