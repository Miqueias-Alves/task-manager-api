import { PrismaClient } from '@prisma/client';
import { IBaseRepository } from './base.repository';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  protected prisma: PrismaClient;
  protected model: any;

  constructor(prisma: PrismaClient, model: any) {
    this.prisma = prisma;
    this.model = model;
  }

  async create(data: T): Promise<T> {
    return this.model.create({ data });
  }

  async findALl(): Promise<T[]> {
    return this.model.findMany();
  }

  async findById(id: number): Promise<T> {
    return this.model.findUnique({ where: { id } });
  }

  async update(id: number, data: T): Promise<T> {
    return this.model.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await this.model.delete({ where: { id } });
  }
}
