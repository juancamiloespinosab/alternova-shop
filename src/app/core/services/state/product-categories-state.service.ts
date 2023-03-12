import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ProductCategoriesDataService } from '@core/services/data/prodcut-categories-data.service';
import { State } from './state';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoriesStateService extends State<string[]> {
  constructor(
    private productCategoriesDataService: ProductCategoriesDataService
  ) {
    super();
    this.loadProductCategories();
  }

  private async loadProductCategories() {
    const productCategories: string[] = await lastValueFrom(
      this.productCategoriesDataService.getCategories()
    );
    this.saveState(productCategories);
  }

  saveState(productCategories: string[]) {
    this.observableData = productCategories;
  }

  getProductCategories() {
    return this.observableValue;
  }

  getProductCategories$() {
    return this.observable;
  }
}
