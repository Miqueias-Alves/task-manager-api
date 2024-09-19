import { Inject, Injectable } from '@nestjs/common';
import { UseCase } from '@project/application/core/use-case.core';
import { UpdateTaskDto } from '@project/application/task/update/update-task.dto';
import { TaskGateway } from '@project/domain/entity/task/task.gateway';

@Injectable()
export class UpdateTaskUseCase
  implements UseCase<UpdateTaskDto, Promise<UpdateTaskDto>>
{
  constructor(
    @Inject('TaskGateway') private readonly taskGateway: TaskGateway,
  ) {}

  async execute(data: UpdateTaskDto): Promise<UpdateTaskDto> {
    return null;
  }

  async update(id: number, data: UpdateTaskDto): Promise<UpdateTaskDto> {
    const task = await this.taskGateway.findById(id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.setTitle(data.title);
    task.setDescription(data.description);
    task.setDueDate(data.dueDate);
    const response = await this.taskGateway.update(task);
    return UpdateTaskDto.from(response);
  }
}
