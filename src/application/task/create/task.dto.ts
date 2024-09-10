import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TaskDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @IsDateString({'strict': true}, { message: 'Due date must be a valid date'})
  @IsNotEmpty({ message: 'Due date is required' })
  dueDate: Date;
}
