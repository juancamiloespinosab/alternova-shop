import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { AnimatedFeedback } from '@core/interfaces';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[animatedFeedback]',
})
export class AnimatedFeedbackDirective implements OnInit, OnDestroy {
  @Input() animatedFeedback!: Observable<AnimatedFeedback>;
  animationClassNameSubscription!: Subscription;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.animationClassNameSubscription = this.animatedFeedback.subscribe(
      (animatedFeedback: AnimatedFeedback) => {
        if (animatedFeedback) {
          this.elementRef.nativeElement.classList.add(
            animatedFeedback.className
          );
          setTimeout(() => {
            this.elementRef.nativeElement.classList.remove(
              animatedFeedback.className
            );
          }, animatedFeedback.duration);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.animationClassNameSubscription?.unsubscribe();
  }
}
