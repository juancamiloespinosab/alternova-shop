import { ElementRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Directive({
  selector: '[shakeError]',
})
export class ShakeErrorDirective implements OnInit, OnDestroy {
  @Input() errorObservable!: Observable<string>;

  errorObservableSubscription!: Subscription;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.errorObservableSubscription = this.errorObservable.subscribe(
      (error: string) => {
        this.elementRef.nativeElement.classList.add('shakeError--on');
        setTimeout(() => {
          this.elementRef.nativeElement.classList.remove('shakeError--on');
        }, 500);
      }
    );
  }

  ngOnDestroy(): void {
    this.errorObservableSubscription?.unsubscribe();
  }
}
