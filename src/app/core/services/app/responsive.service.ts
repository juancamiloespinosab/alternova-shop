import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  isMobile: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.initBreakpointObserver();
  }

  private initBreakpointObserver() {
    return this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((breakpointState: BreakpointState) => {
        this.isMobile = breakpointState.matches;
      });
  }
}
