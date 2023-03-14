import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [CommonModule, CoreModule, SharedModule, FormsModule],
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss'],
  standalone: true,
})
export class QuantitySelectorComponent {
  @Input() numberOptions: number = 5;
  value = 1;
}
