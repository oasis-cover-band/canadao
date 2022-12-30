import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionMultiChoiceElementComponent } from './question-multi-choice-element.component';
import { SvgElementModule } from 'src/app/elements/svg-element/svg-element.module';



@NgModule({
  declarations: [
    QuestionMultiChoiceElementComponent
  ],
  imports: [
    CommonModule,
    SvgElementModule
  ],
  exports: [
    QuestionMultiChoiceElementComponent
  ]
})
export class QuestionMultiChoiceElementModule { }
