import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskUseCase } from '@project/application/task/create/create-task.use-case';
import { TaskDto } from '@project/application/task/create/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}

  @Post()
  creteTask(@Body() tasDto: TaskDto) {
    try {
      return this.createTaskUseCase.execute(tasDto);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
