import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { TaskEntity } from '@project/domain/entity/task/task.entity';

export class UpdateTaskDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsDateString({ strict: true }, { message: 'Due date must be a valid date' })
  @IsNotEmpty({ message: 'Due date is required' })
  dueDate: Date;

  constructor(title: string, description: string, dueDate: Date) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  static from(dto: Partial<TaskEntity>) {
    return new UpdateTaskDto(dto.getTitle(), dto.getDescription(), dto.getDueDate());
  }
}
