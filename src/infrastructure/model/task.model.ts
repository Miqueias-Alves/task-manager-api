import { TaskEntity } from '../../domain/entity/task/task.entity';

export class TaskModel {
  id?: number;
  title: string;
  description?: string;
  dueDate: Date;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    title: string,
    description: string,
    dueDate: Date,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  static fromCreate(
    title: string, description: string,  dueDate: Date,
  ): TaskModel {
    return new TaskModel(title, description, dueDate)
  }

  static toAggregate(
    title: string, description: string,  dueDate: Date,
  ): TaskEntity {
    return new TaskEntity(title, description, dueDate);
  }
}
