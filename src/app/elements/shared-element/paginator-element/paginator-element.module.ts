import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorElementComponent } from './paginator-element.component';
import { PaginationPageNumberElementModule } from './pagination-page-number-element/pagination-page-number-element.module';
import { SectionElementModule } from '../../section-element/section-element.module';
import { PaginationListElementModule } from './pagination-list-element/pagination-list-element.module';



@NgModule({
  declarations: [
    PaginatorElementComponent
  ],
  imports: [
    CommonModule,
    PaginationPageNumberElementModule,
    SectionElementModule,
    PaginationListElementModule
  ],
  exports: [
    PaginatorElementComponent
  ]
})
export class PaginatorElementModule { }
