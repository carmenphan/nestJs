import { Module } from '@nestjs/common';

import { CarController } from './Controllers/car.controller';
import { CarService } from './Services/car.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsEntity } from './Entities/cars.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CarsEntity])],
  controllers: [ CarController],
  providers: [ CarService],
})
export class ProductsModule {}
