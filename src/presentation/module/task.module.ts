import { Module } from '@nestjs/common';
import { TaskController } from '@project/presentation/controller/task.controller';
import { CreateTaskUseCase } from '@project/application/task/create/create-task.use-case';
import { TaskService } from '@project/infrastructure/service/task.service';
import { TaskRepository } from '@project/infrastructure/repository/task.repository';
import { PrismaClient } from '@prisma/client';
import { FindTaskUseCase } from '@project/application/task/find/find-task.use-case';
import { DeleteTaskUseCase } from '@project/application/task/delete/delete-task.use-case';
import { FindByIdTaskUseCase } from '@project/application/task/findById/find-by-id-task.use-case';

@Module({
  providers: [
    CreateTaskUseCase,
    FindTaskUseCase,
    DeleteTaskUseCase,
    FindByIdTaskUseCase,
    {
      provide: 'TaskGateway',
      useClass: TaskService,
    },
    TaskRepository,
    PrismaClient
  ],
  controllers: [TaskController],
})
export class TaskModule {}
