import { IBaseRepository } from './base.repository';

export class BaseRepository<T> implements IBaseRepository<T> {
  protected constructor(private readonly model: any) {}

  async create(data: T): Promise<T> {
    return await this.model.create({ data });
  }

  async findALl(): Promise<T[]> {
    return await this.model.findMany();
  }

  async findById(id: number): Promise<T> {
    return await this.model.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    return await this.model.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await this.model.delete({ where: { id } });
  }
}
