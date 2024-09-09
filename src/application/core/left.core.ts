import { Either } from './either.core';

export class Left<L, R> implements Either<L, R> {
  constructor(private readonly value: L) {}

  isLeft(): boolean {
    return true;
  }

  isRight(): boolean {
    return false;
  }

  map<T>(_: (r: R) => T): Either<L, T> {
    return new Left<L, T>(this.value);
  }

  fold<T>(f: (l: L) => T, _: (r: R) => T): T {
    return f(this.value);
  }
}
