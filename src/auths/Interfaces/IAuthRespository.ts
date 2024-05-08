import {
  AuthPayloadDto,
  AuthResponseDto,
  AuthPermission,
} from '../Dto/auth.dto';
export interface IAuthRespository {
  signIn(body: AuthPayloadDto): Promise<AuthPermission | boolean>;
  signUp(body: AuthPayloadDto): Promise<AuthResponseDto>;
}
