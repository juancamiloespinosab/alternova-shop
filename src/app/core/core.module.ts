import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadJsonDirective } from './directives/download-json.directive';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ShakeErrorDirective } from './directives/shake-error.directive';
import { TableAdapterFromPipe } from './pipes/table-adapter-from.pipe';
import { TableColumnFormatPipe } from './pipes/table-column-format.pipe';

@NgModule({
  declarations: [DownloadJsonDirective, FilterByPipe, ShakeErrorDirective, TableAdapterFromPipe, TableColumnFormatPipe],
  imports: [CommonModule],
  exports: [DownloadJsonDirective, ShakeErrorDirective, FilterByPipe, TableAdapterFromPipe, TableColumnFormatPipe],
})
export class CoreModule {}
