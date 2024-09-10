import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskUseCase } from '@project/application/task/create/create-task.use-case';
import { TaskDto } from '@project/application/task/create/task.dto';
import { FindTaskUseCase } from '@project/application/task/find/find-task.use-case';

@Controller('task')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly findTaskUseCase: FindTaskUseCase,
  ) {
  }

  @Post()
  creteTask(@Body() tasDto: TaskDto) {
    return this.createTaskUseCase.execute(tasDto);
  }

  @Get()
  getTasks() {
    return this.findTaskUseCase.execute();
  }
}
