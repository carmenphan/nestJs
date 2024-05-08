import { Inject, Injectable } from '@nestjs/common';
import {
  AuthPayloadDto,
  AuthPermission,
  AuthResponseDto,
} from '../Dto/auth.dto';
import { IAuthRespository } from '../Interfaces/IAuthRespository';
@Injectable()
export class AuthService {
  constructor(
    @Inject('IAuthRespository')
    protected readonly authResponsitory: IAuthRespository,
  ) {}
  async signIn(auth: AuthPayloadDto): Promise<AuthPermission | boolean> {
    const { username, password } = auth;
    if (!username || !password) {
      return false;
    }
    const isAuth = await this.authResponsitory.signIn(auth);
    if (!isAuth) return false;
    return isAuth;
  }
  async signUp(auth: AuthPayloadDto): Promise<AuthResponseDto | boolean> {
    const { username, password } = auth;
    if (!username || !password) {
      return false;
    }
    const userDto : AuthResponseDto = new AuthResponseDto(
      await this.authResponsitory.signUp(auth),
    );
    return userDto;
  }
}