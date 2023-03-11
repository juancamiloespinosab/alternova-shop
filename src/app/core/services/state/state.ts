import { BehaviorSubject } from 'rxjs';

export class State<T> {
  private observablePrivate: BehaviorSubject<T> = new BehaviorSubject<T>(
    <any>[]
  );

  constructor() {}

  protected get observable() {
    return this.observablePrivate.asObservable();
  }

  protected get observableValue() {
    return this.observablePrivate.getValue();
  }

  protected set observableData(data: T) {
    this.observablePrivate.next(data);
  }
}
