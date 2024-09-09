import { Either } from './either.core';

export class Right<L, R> implements Either<L, R> {
  constructor(private readonly value: R) {}

  isLeft(): boolean {
    return false;
  }

  isRight(): boolean {
    return true;
  }

  map<T>(f: (r: R) => T): Either<L, T> {
    return new Right<L, T>(f(this.value));
  }

  fold<T>(_: (l: L) => T, g: (r: R) => T): T {
    return g(this.value);
  }
}
