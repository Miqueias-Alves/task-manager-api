export interface IBaseRepository<T> {
  create(data: T): Promise<T>;
  findALl(): Promise<T[]>;
  findById(id: number): Promise<T> | null;
  update(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<void>;
}