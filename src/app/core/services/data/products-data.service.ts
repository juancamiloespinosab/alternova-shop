import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProductsResponse } from '@core/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<DataProductsResponse>(
      'assets/data/products.json'
    );
  }
}
