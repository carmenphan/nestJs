import { Module } from '@nestjs/common';
import { AuthController } from "./Controllers/auth.controller";
import { AccountsEntity } from '../accounts/entities/accounts.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "./Services/auth.service";
import { AuthRespository } from "./Services/authRespository";
import { IAuthRespository } from "./Interfaces/IAuthRespository";

@Module({
  imports: [TypeOrmModule.forFeature([AccountsEntity])],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      useClass : AuthRespository,
      provide : 'IAuthRespository' // Use the interface as the token
    }
  ],
})
export class AuthsModule {}