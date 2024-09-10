import { Inject, Injectable } from '@nestjs/common';
import { UnitUseCase } from '@project/application/core/unit-use-case.core';
import { FindDto } from '@project/application/task/find/find.dto';
import { TaskGateway } from '@project/domain/entity/task/task.gateway';

@Injectable()
export class FindTaskUseCase implements UnitUseCase<Promise<FindDto[]>> {
  constructor(
    @Inject('TaskGateway') private readonly taskGateway: TaskGateway,
  ) {}

  async execute(): Promise<FindDto[]> {
    const result = await this.taskGateway.findAll();

    return result.map((item) => {
      return FindDto.from(item)
    });
  }
}
