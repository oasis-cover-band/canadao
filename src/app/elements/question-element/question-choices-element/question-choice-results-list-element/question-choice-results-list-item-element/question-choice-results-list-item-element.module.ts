import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionChoiceResultsListItemElementComponent } from './question-choice-results-list-item-element.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    QuestionChoiceResultsListItemElementComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    QuestionChoiceResultsListItemElementComponent
  ]
})
export class QuestionChoiceResultsListItemElementModule { }
