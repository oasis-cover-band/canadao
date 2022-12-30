import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionTwoChoiceElementComponent } from './question-two-choice-element.component';
import { SvgElementModule } from 'src/app/elements/svg-element/svg-element.module';



@NgModule({
  declarations: [
    QuestionTwoChoiceElementComponent
  ],
  imports: [
    CommonModule,
    SvgElementModule
  ],
  exports: [
    QuestionTwoChoiceElementComponent
  ]
})
export class QuestionTwoChoiceElementModule { }
