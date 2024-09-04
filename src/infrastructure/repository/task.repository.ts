import { Injectable } from '@nestjs/common';
import { PrismaClient, Task } from '@prisma/client';
import { BaseRepository } from './base.repository.impl';

@Injectable()
export class TaskRepository extends BaseRepository<Task> {
  constructor(prisma: PrismaClient) {
    super(prisma, prisma.task);
  }
}
