import { UseCase } from '../../core/use-case.core';
import { TaskDto } from './task.dto';
import { TaskGateway } from '@project/domain/entity/task/task.gateway';
import { TaskEntity } from '@project/domain/entity/task/task.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateTaskUseCase implements UseCase<TaskDto, Promise<TaskDto>> {
  constructor(
    @Inject('TaskGateway') private readonly taskGateway: TaskGateway,
  ) {}

  async execute(data: TaskDto): Promise<TaskDto> {
    const task: TaskEntity = TaskEntity.fromCreate(
      data.title,
      data.description,
      data.dueDate,
    );

    const response = await this.taskGateway.create(task);
    return TaskDto.from(response);
  }
}
