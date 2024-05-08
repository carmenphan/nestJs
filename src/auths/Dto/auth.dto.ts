export class AuthResponseDto {
  id: number;
  username: string;
  permissions: string;
  constructor({ id, username, permissions }) {
    this.id = id;
    this.username = username;
    this.permissions = permissions;
    return this;
  }
}
export class AuthPayloadDto {
  username: string;
  password: string;
}
export class AuthPermission {
  id?: number;
  token: string;
  expiredTime: number;
  constructor({ id, token, expiredTime }) {
    this.id = id;
    this.token = token;
    this.expiredTime = expiredTime;
    return this;
  }
}
