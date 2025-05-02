import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { mockUsers } from './mock/user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(data: { name: string; password: string }) {
    console.log(data);
    // Simulate a backend search
    const user = mockUsers.find((u) => u.name.localeCompare(data.name, undefined, { sensitivity: 'case' }) === 0);

    if (!user) {
      throw new NotFoundException();
    }

    // Check if password match ( usually use bycript or other encryption library, but for this example just compare strings )
    if (user.password !== data.password) {
      throw new UnauthorizedException();
    }

    // On success return a JwtToken without sensitive fields

    const { password, ..._no_password_user } = user;

    return this.jwtService.sign(_no_password_user);
  }
}
