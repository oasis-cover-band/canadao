import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchElementComponent } from './search-element.component';
import { SvgElementModule } from '../svg-element/svg-element.module';



@NgModule({
  declarations: [
    SearchElementComponent
  ],
  imports: [
    CommonModule,
    SvgElementModule
  ],
  exports: [
    SearchElementComponent
  ]
})
export class SearchElementModule { }
