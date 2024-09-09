import { Left } from './left.core';
import { Right } from './right.core';

export interface Either<L, R> {
  isLeft(): boolean;

  isRight(): boolean;

  map<T>(f: (r: R) => T): Either<L, T>;

  fold<T>(f: (l: L) => T, g: (r: R) => T): T;
}

export const Either = {
  left: <L, R>(value: L): Either<L, R> => new Left<L, R>(value),
  right: <L, R>(value: R): Either<L, R> => new Right<L, R>(value),
};
