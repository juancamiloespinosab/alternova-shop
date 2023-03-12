import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  drawerState$: BehaviorSubject<string> = new BehaviorSubject('close');
  toggleDrawer$: Subject<boolean> = new Subject();

  constructor() {}
}
