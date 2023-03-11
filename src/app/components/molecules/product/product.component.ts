import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '@core/models';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [SharedModule],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
})
export class ProductComponent {
  @Input() product!: Product;
}
