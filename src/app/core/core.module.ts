import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadJsonDirective } from './directives/download-json.directive';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ShakeErrorDirective } from './directives/shake-error.directive';

@NgModule({
  declarations: [DownloadJsonDirective, FilterByPipe, ShakeErrorDirective],
  imports: [CommonModule],
  exports: [DownloadJsonDirective, ShakeErrorDirective, FilterByPipe],
})
export class CoreModule {}
