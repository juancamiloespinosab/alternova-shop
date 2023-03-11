import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ProductComponent } from '@components/molecules/product/product.component';
import { Product } from '@core/models';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [SharedModule, ProductComponent],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
})
export class ProductsComponent {
  @Input() products!: Product[];
}
