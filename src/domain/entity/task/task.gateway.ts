import { TaskEntity } from './task.entity';

export interface TaskGateway {
  create(task: TaskEntity): Promise<TaskEntity>;
  findAll(): Promise<TaskEntity[]>;
  findById(id: number): Promise<TaskEntity | null>;
  update(task: TaskEntity): Promise<TaskEntity>;
  delete(id: number): Promise<void>;
}
