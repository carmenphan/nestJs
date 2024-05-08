import { Car } from '../Models/car.model';
import { AbstractRepository } from '../../global/AbstractRepository';

export interface ICarRepository extends AbstractRepository<Car>{
  findRelatedCars(id: number): Promise<Car[]>;
}
