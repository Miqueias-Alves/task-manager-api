import { Inject, Injectable } from '@nestjs/common';
import { FindDto } from '@project/application/task/find/find.dto';
import { TaskGateway } from '@project/domain/entity/task/task.gateway';
import { UseCase } from '@project/application/core/use-case.core';

@Injectable()
export class FindByIdTaskUseCase
  implements UseCase<number, Promise<FindDto | null>>
{
  constructor(
    @Inject('TaskGateway') private readonly taskGateway: TaskGateway,
  ) {}

  async execute(id: number): Promise<FindDto | null> {
    const task = await this.taskGateway.findById(id);

    console.log(task)
    if (!task) {
      return null;
    }
    return FindDto.from(task);
  }
}
