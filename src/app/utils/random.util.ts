export class Random {
  static until(limit: number): number {
    return Math.floor(Math.random() * limit) + 1;
  }
}
