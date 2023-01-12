import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorElementComponent } from './paginator-element.component';
import { PaginationPageNumberElementModule } from './pagination-page-number-element/pagination-page-number-element.module';



@NgModule({
  declarations: [
    PaginatorElementComponent
  ],
  imports: [
    CommonModule,
    PaginationPageNumberElementModule
  ],
  exports: [
    PaginatorElementComponent
  ]
})
export class PaginatorElementModule { }
