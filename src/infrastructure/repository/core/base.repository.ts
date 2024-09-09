export interface IBaseRepository<T> {
  create(data: T): T;
  findALl(): T[];
  findById(id: number): T | null;
  update(id: number, data: T): T;
  delete(id: number): void;
}