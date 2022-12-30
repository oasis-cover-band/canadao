import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionChoicesElementComponent } from './question-choices-element.component';
import { QuestionCustomChoiceElementModule } from './question-custom-choice-element/question-custom-choice-element.module';
import { QuestionMultiChoiceElementModule } from './question-multi-choice-element/question-multi-choice-element.module';
import { QuestionTwoChoiceElementModule } from './question-two-choice-element/question-two-choice-element.module';



@NgModule({
  declarations: [
    QuestionChoicesElementComponent
  ],
  imports: [
    CommonModule,
    QuestionCustomChoiceElementModule,
    QuestionMultiChoiceElementModule,
    QuestionTwoChoiceElementModule
  ],
  exports: [
    QuestionChoicesElementComponent
  ]
})
export class QuestionChoicesElementModule { }
