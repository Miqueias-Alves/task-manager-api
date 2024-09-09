export class TaskEntity {
  title: string;
  description: string;
  dueDate: Date;

  constructor(title: string, description: string, dueDate: Date) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  static fromCreate(title: string, description: string, dueDate: Date): TaskEntity {
    return new TaskEntity(title, description, dueDate);
  }
}
