import { IBaseRepository } from './base.repository';

export class BaseRepository<T> implements IBaseRepository<T> {
  protected constructor(private readonly model: any) {}

  create(data: T): T {
    console.log('data', data)
    return this.model.create({ data });
  }

  findALl(): T[] {
    return this.model.findMany();
  }

  findById(id: number): T {
    return this.model.findUnique({ where: { id } });
  }

  update(id: number, data: Partial<T>): T {
    return this.model.update({ where: { id }, data });
  }

  delete(id: number): void {
    this.model.delete({ where: { id } });
  }
}
