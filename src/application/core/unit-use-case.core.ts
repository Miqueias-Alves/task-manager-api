export interface UnitUseCaseCore<IN> {
  execute(data: IN): void
}
