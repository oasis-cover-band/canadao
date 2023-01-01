import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionTwoChoiceResultsElementComponent } from './question-two-choice-results-element.component';
import { EChartElementModule } from 'src/app/elements/e-chart-element/e-chart-element.module';



@NgModule({
  declarations: [
    QuestionTwoChoiceResultsElementComponent
  ],
  imports: [
    CommonModule,
    EChartElementModule
  ],
  exports: [
    QuestionTwoChoiceResultsElementComponent
  ]
})
export class QuestionTwoChoiceResultsElementModule { }
