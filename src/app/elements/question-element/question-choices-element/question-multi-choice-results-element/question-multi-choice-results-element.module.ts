import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionMultiChoiceResultsElementComponent } from './question-multi-choice-results-element.component';
import { EChartElementModule } from 'src/app/elements/e-chart-element/e-chart-element.module';



@NgModule({
  declarations: [
    QuestionMultiChoiceResultsElementComponent
  ],
  imports: [
    CommonModule,
    EChartElementModule
  ],
  exports: [
    QuestionMultiChoiceResultsElementComponent
  ]
})
export class QuestionMultiChoiceResultsElementModule { }
