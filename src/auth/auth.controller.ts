import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuards } from './auth/jwt.auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: { name: string; password: string }) {
    try {
      return { token: await this.authService.login(data) };
    } catch (error) {
      throw error;
    }
  }
}
