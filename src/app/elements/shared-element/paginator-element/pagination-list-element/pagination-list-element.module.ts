import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationListElementComponent } from './pagination-list-element.component';



@NgModule({
  declarations: [
    PaginationListElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationListElementComponent
  ]
})
export class PaginationListElementModule { }
