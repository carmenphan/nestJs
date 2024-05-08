import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthPayloadDto, AuthPermission } from "../Dto/auth.dto";
import { ResponseType } from "../../global/globalType";
import { ResponseData } from "../../global/globalClass";
import { HttpStatusCode, HttpMessage } from "../../global/globalEnum";
import { AuthService } from "../Services/auth.service";
import { Public } from "../../const/decorator";

@Controller('auth')
export class AuthController {
  constructor(protected readonly authService: AuthService) {}
  @Post('signin')
  @Public()
  async signIn(
    @Body() auth: AuthPayloadDto,
    @Res() res,
  ): Promise<ResponseType<AuthPermission | boolean>> {
    try {
      const isAuth = await this.authService.signIn(auth); // Change this to true
      if (!isAuth) {
        return res.json(
          new ResponseData(
            false,
            HttpStatusCode.UNAUTHORIZED,
            HttpMessage.UNAUTHORIZED,
          ),
        );
      }
      console.log(isAuth);
      return res.json(
        new ResponseData(isAuth, HttpStatusCode.OK, HttpMessage.OK),
      );
    } catch (error) {
      return res.json(
        new ResponseData(
          false,
          HttpStatusCode.NOT_FOUND,
          HttpMessage.NOT_FOUND,
        ),
      );
    }
  }

  @Post('signup')
  async signUp(
    @Body() auth: AuthPayloadDto,
    @Res() res,
  ): Promise<ResponseType<AuthPermission | boolean>> {
    try {
      const isAuth = this.authService.signUp(auth); // Change this to true
      if (!isAuth) {
        return res.json(
          new ResponseData(
            false,
            HttpStatusCode.UNAUTHORIZED,
            HttpMessage.UNAUTHORIZED,
          ),
        );
      }
      return res.json(
        new ResponseData(true, HttpStatusCode.OK, HttpMessage.OK)
      );
    } catch (error) {
      return res.json(
        new ResponseData(
          false,
          HttpStatusCode.NOT_FOUND,
          HttpMessage.NOT_FOUND,
        ),
      );
    }
  }

}