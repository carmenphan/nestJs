import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CarsEntity } from "../Entities/cars.entity";
import { Repository } from "typeorm";;
import { ICarRepository } from "../Interfaces/ICarRepository";
import { BaseRepository } from "../../global/BaseRepository";

@Injectable()
export class CarRepository
  extends BaseRepository<CarsEntity, Repository<CarsEntity>>
  implements ICarRepository
{
  constructor(
    @InjectRepository(CarsEntity)
    protected readonly repository: Repository<CarsEntity>,
  ) {
    super(repository);
  }
}
