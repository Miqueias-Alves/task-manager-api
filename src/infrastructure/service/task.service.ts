import { TaskRepository } from '../repository/task.repository';
import { TaskGateway } from '@project/domain/entity/task/task.gateway';
import { TaskEntity } from '@project/domain/entity/task/task.entity';
import { TaskModel } from '../model/task.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService implements TaskGateway {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(entity: TaskEntity): Promise<TaskEntity> {
    try {
      const task = TaskModel.fromCreate(
        entity.title,
        entity.description,
        entity.dueDate,
      );
      const result = await this.taskRepository.create(task);
      return TaskModel.toAggregate(
        result.title,
        result.description,
        result.dueDate,
      );
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<TaskEntity[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: number): Promise<TaskEntity | null> {
    throw new Error('Method not implemented.');
  }

  async update(id: number): Promise<TaskEntity> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
