import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ParseIntPipe,
  BadRequestException,
  Put,
} from '@nestjs/common';
import { CreateTaskUseCase } from '@project/application/task/create/create-task.use-case';
import { TaskDto } from '@project/application/task/create/task.dto';
import { FindTaskUseCase } from '@project/application/task/find/find-task.use-case';
import { DeleteTaskUseCase } from '@project/application/task/delete/delete-task.use-case';
import { FindByIdTaskUseCase } from '@project/application/task/findById/find-by-id-task.use-case';
import { FindDto } from '@project/application/task/find/find.dto';

@Controller('task')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly findTaskUseCase: FindTaskUseCase,
    private readonly deleteTaskUseCase: DeleteTaskUseCase,
    private readonly findByIdTaskUseCase: FindByIdTaskUseCase,
  ) {}

  @Post()
  async creteTask(@Body() taskDto: TaskDto): Promise<TaskDto> {
    return await this.createTaskUseCase.execute(taskDto);
  }

  @Put()
  async updateTask(@Body() taskDto: TaskDto): Promise<TaskDto> {
    return await this.createTaskUseCase.execute(taskDto);
  }

  @Get()
  async getTasks(): Promise<FindDto[]> {
    return await this.findTaskUseCase.execute();
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number): Promise<any> {
    const task = await this.findByIdTaskUseCase.execute(id);

    if (!task) {
      throw new BadRequestException('Não existe tarefa com esse id.');
    }
    await this.deleteTaskUseCase.execute(id);

    return {
      message: 'Tarefa deletada com sucesso.',
    };
  }

  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<FindDto> {
    const task = await this.findByIdTaskUseCase.execute(id);

    if (!task) {
      throw new BadRequestException('Não existe tarefa com esse id.');
    }
    return task;
  }
}
