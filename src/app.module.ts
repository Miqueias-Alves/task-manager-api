import { Module } from '@nestjs/common';
import { TaskModule } from '@project/presentation/module/task.module';

@Module({
  imports: [TaskModule],
})
export class AppModule {}
