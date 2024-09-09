import { TaskEntity } from './task.entity';

export interface TaskGateway {
  create(task: TaskEntity): Promise<TaskEntity>;
  findAll(): Promise<TaskEntity[]>;
  findById(id: number): Promise<TaskEntity | null>;
  update(id: number): Promise<TaskEntity>;
  delete(id: number): Promise<void>;
}
