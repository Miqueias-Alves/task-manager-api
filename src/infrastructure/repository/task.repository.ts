import { PrismaClient } from '@prisma/client';
import { BaseRepository } from './core/base.repository.impl';
import { TaskModel } from '../model/task.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskRepository extends BaseRepository<TaskModel> {
  constructor(prisma: PrismaClient) {
    super(prisma.task);
  }
}
