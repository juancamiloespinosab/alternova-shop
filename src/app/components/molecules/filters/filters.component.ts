import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ProductCategoriesStateService } from '@core/services/state/product-categories-state.service';

@Component({
  imports: [CommonModule, CoreModule, SharedModule, FormsModule],
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  standalone: true,
})
export class FiltersComponent {
  searchValue = '';
  categoryValue = '';

  constructor(
    public productCategoriesStateService: ProductCategoriesStateService
  ) {}
}
