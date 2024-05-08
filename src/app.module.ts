import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { CategoriesModule } from "./categories/categories.module";
import { AccountsModule } from "./accounts/accounts.module";
import { CategoriesEntity } from "./categories/entities/categories.entity";
import { CarsEntity } from "./products/Entities/cars.entity";
import { AccountsEntity } from "./accounts/entities/accounts.entity";
import { ConfigModule } from "@nestjs/config";
import { AuthsModule } from "./auths/auths.module";
import * as process from "process";
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auths/auth.guard';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "root",
      database: process.env.DB_NAME || "nest-js-2",
      entities: [CategoriesEntity, CarsEntity, AccountsEntity],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ProductsModule,
    CategoriesModule,
    AccountsModule,
    AuthsModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || "secret",
      signOptions: {
        expiresIn: '1d',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService , {
    provide : APP_GUARD,
    useClass : AuthGuard
  }],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
