import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCategoryListElementComponent } from './question-category-list-element.component';
import { QuestionCategoryItemElementModule } from './question-category-item-element/question-category-item-element.module';



@NgModule({
  declarations: [
    QuestionCategoryListElementComponent
  ],
  imports: [
    CommonModule,
    QuestionCategoryItemElementModule
  ],
  exports: [
    QuestionCategoryListElementComponent
  ]
})
export class QuestionCategoryListElementModule { }
