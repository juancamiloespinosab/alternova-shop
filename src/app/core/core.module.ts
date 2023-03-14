import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadJsonDirective } from './directives/download-json.directive';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { TableAdapterFromPipe } from './pipes/table-adapter-from.pipe';
import { TableColumnFormatPipe } from './pipes/table-column-format.pipe';
import { AnimatedFeedbackDirective } from './directives/animated-feedback.directive';
import { IteratorPipe } from './pipes/iterator.pipe';

@NgModule({
  declarations: [
    DownloadJsonDirective,
    FilterByPipe,
    TableAdapterFromPipe,
    TableColumnFormatPipe,
    AnimatedFeedbackDirective,
    IteratorPipe,
  ],
  imports: [CommonModule],
  exports: [
    DownloadJsonDirective,
    FilterByPipe,
    TableAdapterFromPipe,
    TableColumnFormatPipe,
    AnimatedFeedbackDirective,
    IteratorPipe
  ],
})
export class CoreModule {}
