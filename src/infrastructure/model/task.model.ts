import { TaskEntity } from '../../domain/entity/task/task.entity';

export class TaskModel {
  private id?: number;
  private title: string;
  private description?: string;
  private dueDate: Date;
  private createdAt?: Date;
  private updatedAt?: Date;

  constructor(
    title: string,
    description: string,
    dueDate: Date,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromCreate(entity: TaskEntity): TaskModel {
    return new TaskModel(
      entity.getTitle(),
      entity.getDescription(),
      entity.getDueDate(),
      entity.getCratedAt(),
      entity.getUpdatedAt(),
    );
  }

  static fromUpdate(entity: TaskEntity): TaskModel {
    return new TaskModel(
      entity.getTitle(),
      entity.getDescription(),
      entity.getDueDate(),
      entity.getCratedAt(),
      entity.getUpdatedAt(),
    );
  }

  static toAggregate(model: TaskModel): TaskEntity {
    return new TaskEntity(
      model.id,
      model.title,
      model.description,
      model.dueDate,
      model.createdAt,
      model.updatedAt,
    );
  }

  static toAggregateList(taskModels: TaskModel[]): TaskEntity[] {
    return taskModels.map((taskModel) => TaskModel.toAggregate(taskModel));
  }

  get getId(): number {
    return this.id;
  }

  set setIid(value: number) {
    this.id = value;
  }

  get getTitle(): string {
    return this.title;
  }

  set setTitle(value: string) {
    this.title = value;
  }

  get getDescription(): string {
    return this.description;
  }

  set setDescription(value: string) {
    this.description = value;
  }

  get getDueDate(): Date {
    return this.dueDate;
  }

  set setDueDate(value: Date) {
    this.dueDate = value;
  }

  get getCreatedAt(): Date {
    return this.createdAt;
  }

  set setCreatedAt(value: Date) {
    this.createdAt = value;
  }

  get getUpdatedAt(): Date {
    return this.updatedAt;
  }

  set setUpdatedAt(value: Date) {
    this.updatedAt = value;
  }
}
