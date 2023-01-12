import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPageQuestionsElementComponent } from './group-page-questions-element.component';
import { PaginatorElementModule } from '../../shared-element/paginator-element/paginator-element.module';
import { QuestionElementModule } from '../../question-element/question-element.module';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    GroupPageQuestionsElementComponent
  ],
  imports: [
    CommonModule,
    PaginatorElementModule,
    QuestionElementModule,
    PipesModule
  ],
  exports: [
    GroupPageQuestionsElementComponent
  ]
})
export class GroupPageQuestionsElementModule { }
