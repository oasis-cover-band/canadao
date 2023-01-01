import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionChoicesElementComponent } from './question-choices-element.component';
import { QuestionCustomChoiceElementModule } from './question-custom-choice-element/question-custom-choice-element.module';
import { QuestionMultiChoiceElementModule } from './question-multi-choice-element/question-multi-choice-element.module';
import { QuestionTwoChoiceElementModule } from './question-two-choice-element/question-two-choice-element.module';
import { QuestionTwoChoiceResultsElementModule } from './question-two-choice-results-element/question-two-choice-results-element.module';
import { QuestionMultiChoiceResultsElementModule } from './question-multi-choice-results-element/question-multi-choice-results-element.module';
import { QuestionCustomChoiceResultsElementModule } from './question-custom-choice-results-element/question-custom-choice-results-element.module';



@NgModule({
  declarations: [
    QuestionChoicesElementComponent
  ],
  imports: [
    CommonModule,
    QuestionCustomChoiceElementModule,
    QuestionMultiChoiceElementModule,
    QuestionTwoChoiceElementModule,
    QuestionCustomChoiceResultsElementModule,
    QuestionMultiChoiceResultsElementModule,
    QuestionTwoChoiceResultsElementModule
  ],
  exports: [
    QuestionChoicesElementComponent
  ]
})
export class QuestionChoicesElementModule { }
