import { TaskEntity } from '@project/domain/entity/task/task.entity';

export class FindDto {
  id?: number;
  title: string;
  description?: string;
  dueDate: Date;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static from(data: TaskEntity): FindDto {
    return new FindDto(
      data.getId(),
      data.getTitle(),
      data.getDescription(),
      data.getDueDate(),
      data.getCratedAt(),
      data.getUpdatedAt(),
    );
  }
}
