export class FindDto {
  title: string;
  description?: string;
  dueDate: string;

  constructor(title: string, description: string, dueDate: string) {
    this.title = title;
     this.description = description;
     this.dueDate = dueDate;
  }

  static from(data: any): FindDto {
    return new FindDto(data.title, data?.description, data.dueDate);
  }
}
