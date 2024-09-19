export class TaskEntity {
  private id?: number;
  private title: string;
  private description?: string;
  private dueDate: Date;
  private cratedAt?: Date;
  private updatedAt?: Date;

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
    this.cratedAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromCreate(
    title: string,
    description: string,
    dueDate: Date,
  ): TaskEntity {
    const now = new Date();
    return new TaskEntity(null, title, description, dueDate, now, now);
  }

  getId(): number {
    return this.id;
  }

  setId(value: number): void {
    this.id = value;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string): void {
    this.title = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  getDueDate(): Date {
    return this.dueDate;
  }

  setDueDate(value: Date) {
    this.dueDate = value;
  }

  getCratedAt(): Date {
    return this.cratedAt;
  }

  setCratedAt(value: Date) {
    this.cratedAt = value;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  setUpdatedAt(value: Date) {
    this.updatedAt = value;
  }
}
