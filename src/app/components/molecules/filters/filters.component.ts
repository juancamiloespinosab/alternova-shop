import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ProductCategoriesStateService } from '@core/services/state/product-categories-state.service';
import { ResponsiveService } from '@core/services/app/responsive.service';

@Component({
  imports: [CommonModule, CoreModule, SharedModule, FormsModule],
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  standalone: true,
})
export class FiltersComponent {
  value: { [key: string]: string | string[] } = {
    search: '',
    category: [],
  };

  constructor(
    public productCategoriesStateService: ProductCategoriesStateService,
    public responsiveService: ResponsiveService
  ) {}

  getAppliedFiltersNumber(): number {
    let appliedFiltersCount = 0;

    for (let [key, value] of Object.entries(this.value)) {
      if (typeof value === 'string') {
        value !== '' && value !== undefined ? appliedFiltersCount++ : 0;
      }

      if (value instanceof Array) {
        appliedFiltersCount += value.length;
      }
    }

    return appliedFiltersCount;
  }

  clearFilters() {
    for (let [key, value] of Object.entries(this.value)) {
      this.value[key] = '';
    }
  }
}
