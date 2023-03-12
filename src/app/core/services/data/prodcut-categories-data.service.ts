import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoriesDataService {
  constructor(private httpClient: HttpClient) {}

  getCategories() {
    return this.httpClient
      .get<string[]>('assets/data/products.json')
      .pipe(
        map((dataProducts: any) =>
          dataProducts.products
            .map((product: Product) => product.type)
            .filter(
              (category: string, index: number, self: string[]) =>
                self.indexOf(category) === index
            )
        )
      );
  }
}
