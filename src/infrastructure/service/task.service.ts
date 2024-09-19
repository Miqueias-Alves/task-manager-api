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
      const task = TaskModel.fromCreate(entity);
      const result = await this.taskRepository.create(task);
      return await TaskModel.toAggregate(result);
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<TaskEntity[]> {
    try {
      const result = await this.taskRepository.findALl();
      return TaskModel.toAggregateList(result);
    } catch (error) {
      throw error;
    }
  }

  async findById(id: number): Promise<TaskEntity | null> {
    const result = await this.taskRepository.findById(id);
    if (!result) {
      return null;
    }

    return TaskModel.toAggregate(result);
  }

  async update(entity: TaskEntity): Promise<TaskEntity> {
    try {
      const task = TaskModel.fromUpdate(entity);
      const result = await this.taskRepository.update(entity.getId(), task);
      return await TaskModel.toAggregate(result);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      return await this.taskRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
