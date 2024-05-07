import { BaseEntity, DeepPartial, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';

export abstract class BaseRepository<
  T extends BaseEntity,
  R extends Repository<T>,
> {
  constructor(
    @InjectRepository(Repository<T>)
    protected readonly repository: R,
  ) {}
  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }
  async findOne(id: number): Promise<T> {
    return await this.repository.findOne({
      where: { id } as FindOptionsWhere<BaseEntity>,
    });
  }
  async create(data: T): Promise<T> {
    return await this.repository.save(data);
  }
  async update(id, data: T extends DeepPartial<ObjectLiteral> ? ObjectLiteral: {}): Promise<T> {
    await this.repository.update(id, data);
    return await this.findOne(id);
  }
  async delete(id: number): Promise<boolean> {
    const data = await this.findOne(id);
    if (data && (await this.repository.delete(id))) {
      return true;
    }
    return false;
  }
}