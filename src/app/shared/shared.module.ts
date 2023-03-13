import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from './material.index';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgOptimizedImage, MATERIAL_MODULES],
  exports: [CommonModule, NgOptimizedImage, MATERIAL_MODULES],
})
export class SharedModule {}
