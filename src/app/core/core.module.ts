import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadJsonDirective } from './directives/download-json.directive';
import { FilterByPipe } from './pipes/filter-by.pipe';



@NgModule({
  declarations: [
    DownloadJsonDirective,
    FilterByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DownloadJsonDirective
  ]
})
export class CoreModule { }
