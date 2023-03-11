import { Injectable } from '@angular/core';
import { Product } from '@core/models';
import { ProductsDataService } from '@core/services/data/products-data.service';
import { lastValueFrom } from 'rxjs';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class ProductsStateService extends State<Product[]> {
  constructor(private productsDataService: ProductsDataService) {
    super();
    this.loadProducts();
  }

  private async loadProducts() {
    const { products }: { products: Product[] } = await lastValueFrom(
      this.productsDataService.getProducts()
    );
    this.saveState(products);
  }

  saveState(products: Product[]) {
    this.observableData = products;
  }

  getProducts() {
    return this.observableValue;
  }

  getProducts$() {
    return this.observable;
  }
}
