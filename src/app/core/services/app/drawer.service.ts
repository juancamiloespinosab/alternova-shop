import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  isDrawerOpen$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  toggleDrawer$: Subject<boolean> = new Subject();

  constructor() {}
}
