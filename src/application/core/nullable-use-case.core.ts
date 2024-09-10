export interface NullableUseCase<IN> {
  execute(data: IN): void;
}
