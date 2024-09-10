import { Inject, Injectable } from '@nestjs/common';
import { TaskGateway } from '@project/domain/entity/task/task.gateway';
import { UseCase } from '@project/application/core/use-case.core';

@Injectable()
export class DeleteTaskUseCase implements UseCase<number, Promise<void>> {
  constructor(
    @Inject('TaskGateway') private readonly taskGateway: TaskGateway,
  ) {}

  async execute(id: number): Promise<void> {
    return await this.taskGateway.delete(id);
  }
}
