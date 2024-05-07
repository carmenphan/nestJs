import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CarsEntity } from "../Entities/cars.entity";
import { Repository } from "typeorm";
import { Car } from '../Models/car.model';
import { ICarRepository } from "../Interfaces/ICarRepository";

@Injectable()
export class CarRepository implements ICarRepository{
  constructor(
    @InjectRepository(CarsEntity)
    private carRepository: Repository<CarsEntity>,
  ) {}
  async findAll(): Promise<Car[]> {
    return await this.carRepository.find();
  }
  async findOne(id: number): Promise<Car> {
    return await this.carRepository.findOne({ where : {id : id} });
  }
  async create(car: Car): Promise<Car> {
    return await this.carRepository.save(car);
  }
  async update(id, car: Car): Promise<Car> {
    await this.carRepository.update(id, car);
    return await this.findOne(id);
  }
  async delete(id: number): Promise<boolean> {
    const car = await this.findOne(id);
    if (car && (await this.carRepository.delete(id))) {
      return true;
    }
    return false;
  }
}