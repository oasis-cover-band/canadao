import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionChoiceResultsListElementComponent } from './question-choice-results-list-element.component';
import { QuestionChoiceResultsListItemElementModule } from './question-choice-results-list-item-element/question-choice-results-list-item-element.module';



@NgModule({
  declarations: [
    QuestionChoiceResultsListElementComponent
  ],
  imports: [
    CommonModule,
    QuestionChoiceResultsListItemElementModule
  ],
  exports: [
    QuestionChoiceResultsListElementComponent
  ]
})
export class QuestionChoiceResultsListElementModule { }
