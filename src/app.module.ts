import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CategoriesModule } from './categories/categories.module';
import { AccountsModule } from './accounts/accounts.module';
import { CategoriesEntity } from './categories/entities/categories.entity';
import { CarsEntity } from "./products/Entities/cars.entity";
import { AccountsEntity } from "./accounts/entities/accounts.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest-js-2',
      entities: [CategoriesEntity, CarsEntity, AccountsEntity],
      synchronize: true,
    }),
    ProductsModule,
    CategoriesModule,
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
